import { Global, Module } from "@nestjs/common";
import { EmployeeService } from "./employee.service";

@Global()
@Module({
    exports: [EmployeeService],
    providers: [EmployeeService]
})
export class EmployeeModule {}