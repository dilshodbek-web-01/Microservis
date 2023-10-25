import { NestInterceptor, CallHandler } from '@nestjs/common'
import { BadRequestException, ExecutionContext  } from "@nestjs/common";
import { Observable } from "rxjs";

export class CheckLanguageInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const request = context.switchToHttp().getRequest()

        const contentLanguage = request.headers["content-language"]

        if(!contentLanguage) {
            throw new BadRequestException('Provide content-language')
        }

        request.body.language = contentLanguage

        return next.handle()
    }
}