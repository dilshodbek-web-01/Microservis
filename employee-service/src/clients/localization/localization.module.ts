import { Global, Module } from "@nestjs/common";
import { LocalizationService } from "./localization.service";

@Global()
@Module({
    exports: [LocalizationService],
    providers: [LocalizationService]
})
export class LocalizationModule {}