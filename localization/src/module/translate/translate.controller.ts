import { Controller, Get, Post, Query, Body, HttpCode, HttpStatus } from "@nestjs/common";
import type { TranslateCreateRequest, TranslateRetrieveRequest, TranslateRetrieveResponse } from "./interfaces";
import { TranslateService } from "./translate.service";

@Controller({
    path: 'localization-service'
})
export class TranslateController {
    readonly #_service: TranslateService

    constructor(service: TranslateService) {
        this.#_service = service
    }

    @HttpCode(HttpStatus.OK)
    @Get('translate')
    translateRetrieve(@Query() query: TranslateRetrieveRequest): Promise<TranslateRetrieveResponse> {
        return this.#_service.translateRetrieve(query)
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('translate')
    async translateCreate(@Body() body: TranslateCreateRequest): Promise<void> {
        await this.#_service.translateCreate(body)
    }   
}