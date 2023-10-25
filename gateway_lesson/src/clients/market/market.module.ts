import { Global, Module } from "@nestjs/common";
import { MarketService } from "./market.service";

@Global()
@Module({
    exports: [MarketService],
    providers: [MarketService]
})
export class MarketModule {}