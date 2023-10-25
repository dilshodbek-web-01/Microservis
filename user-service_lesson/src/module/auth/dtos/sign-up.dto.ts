import { IsString, IsNotEmpty, IsStrongPassword, MaxLength } from "class-validator";
import type { SignUpRequest } from "../interfaces";

export class SignUpDto implements SignUpRequest {
    @MaxLength(64)
    @IsString()
    @IsNotEmpty()
    username: string

    @IsStrongPassword()
    @IsNotEmpty()
    password: string
}