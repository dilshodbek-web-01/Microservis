import type { EmployeeCreateRequest } from './interfaces'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma'
import { LocalizationService } from '../../clients'
import { randomUUID } from 'crypto'
import { TranslateRetrieveRequest, TranslateRetrieveResponse } from 'clients/localization/interfaces'

@Injectable()
export class EmployeeService {
  readonly #_prisma: PrismaService
  readonly #_localization: LocalizationService

  constructor(prisma: PrismaService, localization: LocalizationService) {
    this.#_prisma = prisma
    this.#_localization = localization
  }

  async employeeRetrieve(
    payload: TranslateRetrieveRequest,
  ): Promise<TranslateRetrieveResponse> {    
    return this.#_localization.getTranslate({
      code: payload.code,
      language: payload.language,
      module: 'backend'
    })
  }

  async employeeCreate(
    payload: EmployeeCreateRequest,
  ): Promise<null> {   
    const code = randomUUID()
    
    await this.#_prisma.employee.create({
      data: {
        code: code,
        jobs: {
          connect: {
            id: payload.jobId
          }
        }
      }
    })

    await this.#_localization.createTranslate({
      code,
      content: payload.name,
      language: payload.language,
      module: 'backend'
    })
    
    return null
  }

}
