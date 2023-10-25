import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { employeeConfig, marketConfig, userConfig } from '@config';
import { EmployeeGatewayModule } from '@module';
import { UserGatewayModule } from 'module/user';
import { MarketGatewayModule } from 'module/market';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [employeeConfig, userConfig, marketConfig],
      isGlobal: true
    }),
    EmployeeGatewayModule,
    UserGatewayModule,
    MarketGatewayModule
  ],
})
export class App {}
