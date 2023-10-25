import { Injectable, InternalServerErrorException } from "@nestjs/common"
import { ClientTCP } from "@nestjs/microservices"
import { ConfigService } from "@nestjs/config"
import { firstValueFrom, timeout } from "rxjs"
import { EmployeeCommand } from "./enums"
import type { EmployeeCreateRequest, EmployeeRetrieveAllRequest, EmployeeRetrieveAllResponse } from "./interfaces"

@Injectable()
export class EmployeeService {
    readonly #_client: ClientTCP
    readonly #_timeout: number

    constructor(config: ConfigService) {
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('employee.host'),
            port: config.getOrThrow<number>('employee.port'),
        })

        this.#_timeout = config.getOrThrow<number>('employee.timeout')
    }

    async employeeRetrieveAll(payload: EmployeeRetrieveAllRequest): Promise<EmployeeRetrieveAllResponse> {        
        return this.#_send<EmployeeRetrieveAllResponse, EmployeeRetrieveAllRequest>(EmployeeCommand.EMPLOYEE_RETRIEVE_ALL, payload)
    }

    async employeeCreate(payload: EmployeeCreateRequest): Promise<null> {
        return this.#_send<null, EmployeeCreateRequest>(EmployeeCommand.EMPLOYEE_CREATE, payload)
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
