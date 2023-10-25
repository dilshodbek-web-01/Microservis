import type { Market } from '@prisma/client'
import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@prisma'
import type {
  MarketCreateRequest,
  MarketRetrieveAllRequest,
  MarketUpdateRequest,
  MarketDeleteResponse,
} from './interfaces'
import { MarketCreateResponse } from './interfaces/market-create.interfaces'

@Injectable()
export class MarketService {
  readonly #_prisma: PrismaService

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma
  }

  async marketRetrieveAll(
    payload: MarketRetrieveAllRequest,
  ): Promise<Pick<Market, 'id' | 'title'>[]> {
    const allMarkets = await this.#_prisma.market.findMany({
      take: payload.pageLimit,
      skip: (payload.pageOffset - 1) * payload.pageLimit,
      select: {
        id: true,
        title: true,
      },
    })

    return allMarkets
  }

  async marketCreate(payload: MarketCreateRequest): Promise<null> {
    await this.#_prisma.market.create({
      data: {
        title: payload.title,
        deletedAt: null,
      },
    })
    return null
  }

  async marketUpdate(payload: MarketUpdateRequest): Promise<void> {
    // await this.#_checkMarket(payload.id)

    await this.#_prisma.market.update({
      data: {
        title: payload.title,
      },
      where: {
        id: payload.id,
      },
    })

    return null
  }

  async marketDelete(payload: MarketDeleteResponse) {
    await this.#_prisma.market.delete({
      where: {
        id: payload.id,
      },
    })

    return null
  }

  // async #_checkMarket(id: string): Promise<void> {
  //   const market = await this.#_prisma.market.findFirst({
  //     where: {
  //       id,
  //     },
  //   })

  //   if (!market) {
  //     throw new NotFoundException('Market not found')
  //   }
  // }
}
