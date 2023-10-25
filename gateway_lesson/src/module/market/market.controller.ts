import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import {
  MarketCreateRequest,
  MarketCreateResponse,
  MarketService,
  MarketUpdateRequest,
} from 'clients/market';
import {
  ApiTags,
  ApiHeaders,
  ApiQuery,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { MarketRetrieveAllResponseDto } from './dtos';
import type {
  MarketRetrieveAllRequest,
  MarketRetrieveAllResponse,
  MarketDeleteRequest,
} from '@clients';

@ApiTags('Market')
@ApiHeaders([
  {
    name: 'Authorization',
    example: 'Bearer token...',
    required: true,
  },
])
@Controller({
  path: 'market-service',
  version: '1',
})
export class MarketController {
  readonly #_service: MarketService;

  constructor(service: MarketService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get('read')
  @ApiQuery({ name: 'pageOffset', example: 2, required: false })
  @ApiQuery({ name: 'pageLimit', example: 10, required: false })
  @ApiOkResponse({ type: MarketRetrieveAllResponseDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  marketRetrieveAll(
    @Query() query: MarketRetrieveAllRequest,
  ): Promise<MarketRetrieveAllResponse> {
    return this.#_service.marketRetrieveAll(query);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  marketCreate(
    @Body() body: MarketCreateRequest,
  ): Promise<MarketCreateResponse> {
    return this.#_service.marketCreate(body);
  }

  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  marketUpdate(@Param('id') id: string,
    @Body() query: MarketUpdateRequest): Promise<void> {
    return this.#_service.marketUpdate({ id, ...query })
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  marketDelete(
    @Param() query: MarketDeleteRequest,
  ): Promise<MarketDeleteRequest> {
    return this.#_service.marketDelete(query);
  }

}
