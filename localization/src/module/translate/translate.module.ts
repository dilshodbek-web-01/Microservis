import { Module } from "@nestjs/common";
import { PrismaService } from "@prisma";
import { TranslateService } from "./translate.service";
import { TranslateController } from "./translate.controller";

@Module({
    providers: [TranslateService, PrismaService],
    controllers: [TranslateController]
})
export class TranslateModule {}
