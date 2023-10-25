import { IsNumber, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { EmployeeRetrieveAllRequest } from '../interfaces'

export class EmployeeRetrieveAllDto implements EmployeeRetrieveAllRequest {
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  pageOffset?: number

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  pageLimit: number
}
