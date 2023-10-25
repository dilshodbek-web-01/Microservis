import { Module } from '@nestjs/common'
import { EmployeeService } from './employee.service'
import { EmployeeController } from './employee.controller'
import { PrismaService } from '../../prisma'
import { LocalizationModule } from '../../clients'

@Module({
  imports: [LocalizationModule],
  providers: [EmployeeService, PrismaService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
