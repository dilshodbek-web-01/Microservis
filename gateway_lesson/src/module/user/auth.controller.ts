import { Controller, HttpCode, HttpStatus, Post, Body } from "@nestjs/common"
import { UserService } from '@clients'
import {
    ApiTags,
    ApiOkResponse,
    ApiBadRequestResponse,
    ApiUnauthorizedResponse,
    ApiInternalServerErrorResponse,
    ApiBody,
} from "@nestjs/swagger"
import { SignInDto, SignInResponseDto, SignUpDto, SignUpResponseDto } from "./dtos"
import type { SignUpRequest, SignInRequest } from '@clients'

@ApiTags('Auth')
@Controller({
    path: 'user-service',
    version: '1'
})
export class AuthController {
    readonly #_service: UserService

    constructor(service: UserService) {
        this.#_service = service
    }

    @HttpCode(HttpStatus.OK)
    @Post('sign-up')
    @ApiBody({ type: SignUpDto })
    @ApiOkResponse({ type: SignUpResponseDto })
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    signUp(
        @Body() body: SignUpRequest
    ) {
        return this.#_service.signUp(body)
    }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    @ApiBody({ type: SignInDto })
    @ApiOkResponse({ type: SignInResponseDto })
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    signIn(
        @Body() body: SignInRequest
    ) {
        return this.#_service.signIn(body)
    }
}
