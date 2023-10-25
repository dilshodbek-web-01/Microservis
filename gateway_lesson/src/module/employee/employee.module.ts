import { Module } from "@nestjs/common";
import { EmployeeModule } from "@clients";
import { EmployeeController } from "./employee.controller";

@Module({
    imports: [EmployeeModule],
    controllers: [EmployeeController]
})
export class EmployeeGatewayModule {}
