import { ApiProperty } from "@nestjs/swagger";
import type { MarketRetrieveAllResponse } from "@clients";

export class MarketRetrieveAllResponseDto implements MarketRetrieveAllResponse {
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string

    @ApiProperty({
        example: 'uzum'
    })
    title: string
}