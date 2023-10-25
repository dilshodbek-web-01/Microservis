import { registerAs } from "@nestjs/config"

declare interface EmployeeServiceOptions {
    host: string
    port: number
    timeout: number
}

export const employeeConfig = registerAs<EmployeeServiceOptions>('employee', (): EmployeeServiceOptions => ({
    host: process.env.EMPLOYEE_SERVICE_HOST,
    port: process.env.EMPLOYEE_SERVICE_PORT ? parseInt(process.env.EMPLOYEE_SERVICE_PORT, 10): undefined,
    timeout: process.env.EMPLOYEE_SERVICE_TIMEOUT ? parseInt(process.env.EMPLOYEE_SERVICE_TIMEOUT, 10): undefined,
}))
