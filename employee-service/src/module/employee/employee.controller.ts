import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { EmployeeService } from './employee.service'
import { Command } from './enums'
import { TranslateRetrieveRequest, TranslateRetrieveResponse } from 'clients/localization/interfaces'
import { EmployeeCreateDto } from './dtos'

@Controller()
export class EmployeeController {
  readonly #_service: EmployeeService

  constructor(service: EmployeeService) {
    this.#_service = service
  }

  @MessagePattern(Command.EMPLOYEE_RETRIEVE_ALL)
  employeeRetrieve(
    @Payload() payload: TranslateRetrieveRequest,
  ): Promise<TranslateRetrieveResponse> {
    return this.#_service.employeeRetrieve(payload)
  }

  @MessagePattern(Command.EMPLOYEE_CREATE)
  employeeCreate(
    @Payload() payload: EmployeeCreateDto,
  ): Promise<null> {
    return this.#_service.employeeCreate(payload)
  }

}
