import { Injectable, InternalServerErrorException } from "@nestjs/common"
import { ClientTCP } from "@nestjs/microservices"
import { ConfigService } from "@nestjs/config"
import { firstValueFrom, timeout } from "rxjs"
import { MarketCommand } from "./enums"
import type { MarketCreateRequest, MarketCreateResponse, MarketDeleteRequest, MarketRetrieveAllRequest, MarketRetrieveAllResponse, MarketUpdateRequest } from "./interfaces"

@Injectable()
export class MarketService {
    readonly #_client: ClientTCP
    readonly #_timeout: number

    constructor(config: ConfigService) {
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('market.host'),
            port: config.getOrThrow<number>('market.port'),
        })

        this.#_timeout = config.getOrThrow<number>('market.timeout')
    }

    async marketRetrieveAll(payload: MarketRetrieveAllRequest): Promise<MarketRetrieveAllResponse> {
        return this.#_send<MarketRetrieveAllResponse, MarketRetrieveAllRequest>(MarketCommand.MARKET_RETRIEVE_ALL, payload)
    }

    async marketCreate(payload: MarketCreateRequest): 
    Promise<MarketCreateResponse> {
        return this.#_send<MarketCreateRequest, MarketCreateResponse>(MarketCommand.MARKET_CREATE, payload)
    }

    async marketUpdate(payload: MarketUpdateRequest): Promise<void> {        
        return this.#_send<void, MarketUpdateRequest>(MarketCommand.MARKET_UPDATE, payload)
    }

    async marketDelete(payload: MarketDeleteRequest): Promise<MarketDeleteRequest> {
        return this.#_send<MarketDeleteRequest, MarketDeleteRequest>(MarketCommand.MARKET_DELETE, payload)
    }

    async #_connect(): Promise<void> {
        await this.#_client.connect()
    }

    #_disConnect(): void {
        this.#_client.close()
    }

    async #_send<TResponse, TRequest>(pattern: string, payload: TRequest): Promise<TResponse> {
        try {
            return await firstValueFrom(
                this.#_client.send<TResponse, TRequest>(pattern, payload)
                .pipe(timeout(this.#_timeout))
            )
        } catch(error: unknown) {
            throw new InternalServerErrorException(error)
        }
    }
}
