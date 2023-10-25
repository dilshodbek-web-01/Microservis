import { IsUUID, IsString, IsNotEmpty } from 'class-validator'
import { EmployeeCreateRequest } from '../interfaces'

export class EmployeeCreateDto implements EmployeeCreateRequest {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  code: string

  @IsString()
  @IsNotEmpty()
  language: string

  @IsNotEmpty()
  @IsUUID('4')
  jobId: string
}
