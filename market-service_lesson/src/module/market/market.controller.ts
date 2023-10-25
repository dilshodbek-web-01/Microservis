import type { Market } from '@prisma/client'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { MarketService } from './market.service'
import { PAGE_LIMIT, PAGE_OFFSET } from './constants'
import { Command } from './enums'
import { MarketCreateDto, MarketRetrieveAllDto } from './dtos'
import { MarketDeleteResponse, MarketUpdateRequest } from './interfaces'

@Controller()
export class MarketController {
  readonly #_service: MarketService

  constructor(service: MarketService) {
    this.#_service = service
  }

  @MessagePattern(Command.MARKET_RETRIEVE_ALL)
  marketRetrieveAll(
    @Payload() payload: MarketRetrieveAllDto,
  ): Promise<Pick<Market, 'id' | 'title'>[]> {
    return this.#_service.marketRetrieveAll({
      pageLimit: payload.pageLimit ?? PAGE_LIMIT,
      pageOffset: payload.pageOffset ?? PAGE_OFFSET,
    })
  }

  @MessagePattern(Command.MARKET_CREATE)
  marketCreate(@Payload() payload: MarketCreateDto): Promise<void> {
    return this.#_service.marketCreate(payload)
  }

  @MessagePattern(Command.MARKET_UPDATE)
  marketUpdate(@Payload() payload: MarketUpdateRequest): Promise<void> {    
    return this.#_service.marketUpdate(payload)
  }

  @MessagePattern(Command.MARKET_DELETE)
  marketDelete(@Payload() payload: MarketDeleteResponse) {
    return this.#_service.marketDelete(payload)
  }

}
