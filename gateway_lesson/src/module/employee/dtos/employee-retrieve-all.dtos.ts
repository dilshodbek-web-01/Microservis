import { ApiProperty } from "@nestjs/swagger";
import type { EmployeeRetrieveAllJobResponse, EmployeeRetrieveAllResponse } from "@clients";

class EmployeeRetrieveAllJobResponsetDto implements EmployeeRetrieveAllJobResponse {
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string

    @ApiProperty({
        example: 'teacher'
    })
    title: string
}

export class EmployeeRetrieveAllResponsetDto implements EmployeeRetrieveAllResponse {
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string

    @ApiProperty({
        example: 'Toshmat'
    })
    name: string

    @ApiProperty({
        type: EmployeeRetrieveAllJobResponsetDto,
        isArray: true
    })
    jobs: EmployeeRetrieveAllJobResponse[]
}
