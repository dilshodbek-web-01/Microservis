import { Module } from '@nestjs/common'
import { MarketService } from './market.service'
import { MarketController } from './market.controller'
import { PrismaService } from '../../prisma'

@Module({
  providers: [MarketService, PrismaService],
  controllers: [MarketController],
})
export class MarketModule {}
