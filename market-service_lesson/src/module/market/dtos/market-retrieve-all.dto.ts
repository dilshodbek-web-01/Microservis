import { IsNumber, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { MarketRetrieveAllRequest } from '../interfaces'

export class MarketRetrieveAllDto implements MarketRetrieveAllRequest {
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  pageOffset?: number

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  pageLimit?: number
}
