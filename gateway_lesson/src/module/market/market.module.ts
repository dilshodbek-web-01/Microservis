import { Module } from "@nestjs/common";
import { MarketModule } from "@clients";
import { MarketController } from "./market.controller";

@Module({
    imports: [MarketModule],
    controllers: [MarketController]
})
export class MarketGatewayModule {}
