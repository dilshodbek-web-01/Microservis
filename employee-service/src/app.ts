import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { dbConfig, localizationConfig } from '@config'
import { EmployeeModule } from './module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig, localizationConfig],
      isGlobal: true,
    }),
    EmployeeModule
  ],
})
export class App {}
