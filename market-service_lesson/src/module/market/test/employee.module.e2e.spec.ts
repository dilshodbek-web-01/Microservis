import type { ClientProxy } from '@nestjs/microservices'
import { Test } from '@nestjs/testing'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { INestMicroservice, ValidationPipe } from '@nestjs/common'
import { PrismaModule } from '../../../prisma'
import { ConfigModule } from '@nestjs/config'
import { dbConfig } from '../../../config'
import { EmployeeModule } from '../market.module'
import { firstValueFrom } from 'rxjs'

describe('employee.module', (): void => {
    let server: INestMicroservice
    let client: ClientProxy
    
    beforeAll(async(): Promise<void> => {
        const module = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    load: [dbConfig],
                    isGlobal: true,
                }),
                EmployeeModule,
                PrismaModule
            ],
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
        it('should return empliyee list', async(): Promise<void> => {
            const response = await firstValueFrom(
                client.send('cmd:employee.retrieve.all', {
                    pageOffset: 1,
                    pageLimit: 1
                })
            )

            expect(response).toEqual(
                [
                    {
                      id: 'c6bed1db-aa0f-4bb5-9a09-dfc6a7c855b7',
                      name: 'Eshmat',
                      jobs: []
                    }
                  ]
            )
        })
    })
})
