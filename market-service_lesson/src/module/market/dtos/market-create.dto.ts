import { IsString, IsNotEmpty } from 'class-validator'
import type { MarketCreateRequest } from '../interfaces'

export class MarketCreateDto implements MarketCreateRequest {
  @IsString()
  @IsNotEmpty()
  title: string
}
