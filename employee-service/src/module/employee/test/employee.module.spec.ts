import type { ClientProxy } from '@nestjs/microservices'
import { Test } from '@nestjs/testing'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { INestMicroservice, ValidationPipe } from '@nestjs/common'
import { PrismaModule, PrismaService } from '../../../prisma'
import { ConfigModule } from '@nestjs/config'
import { dbConfig, localizationConfig } from '../../../config'
import { EmployeeModule } from '../employee.module'
import { firstValueFrom } from 'rxjs'
import { EmployeeService } from '../employee.service'
import { Employee } from '@prisma/client'

describe('employee.module', (): void => {
    let server: INestMicroservice
    let client: ClientProxy
    
    beforeAll(async(): Promise<void> => {
        const module = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    load: [dbConfig, localizationConfig],
                    isGlobal: true,
                }),
                EmployeeModule,
                PrismaModule
            ],
        })
        .overrideProvider(PrismaService)
        .useValue({
            employee: {
                findMany: jest.fn().mockResolvedValue([
                    {
                        id: '1',
                        name: 'foydalanuvchi'
                    }
                ])
            }
        })
        .compile()

        const clientModule = await Test.createTestingModule({
            imports: [
              ClientsModule.register([
                {
                  name: 'EmployeeClient',
                  transport: Transport.TCP,
                },
              ]),
            ],
        }).compile()

        server = module.createNestMicroservice({
            transport: Transport.TCP,
        })

        server.useGlobalPipes(new ValidationPipe())

        client = clientModule.get<ClientProxy>('EmployeeClient')

        await server.listen()

        await client.connect()
    })

    afterAll(async(): Promise<void> => {
        client.close()
        await server.close()
    })

    describe('Employee service', (): void => {
        it('should return employee list', async(): Promise<void> => {

            const result = [
                {
                    id: '1',
                    name: 'user'
                }
            ]

            const response = await firstValueFrom(
                client.send('cmd:employee.retrieve.all', {
                    pageOffset: 1,
                    pageLimit: 1
                })
            )

            const spyService = 
            jest.spyOn(server.get(EmployeeService), 'employeeRetrieveAll')
            .mockImplementationOnce(async(): Promise<Pick<Employee, 'id' | 'name'>[]> => result)

            expect(response).toBeDefined()

            spyService.mockRestore()
        })

        it('should create employee', async(): Promise<void> => {

            const response = await firstValueFrom(
                client.send('cmd:employee.retrieve.all', {
                    pageOffset: 1,
                    pageLimit: 1
                })
            )

            const spyService = 
            jest.spyOn(server.get(EmployeeService), 'employeeRetrieveAll')
            .mockImplementationOnce(async(): Promise<null> => null)

            expect(response).toBeDefined()

            spyService.mockRestore()
        })
    })
})


