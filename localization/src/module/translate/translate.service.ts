import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@prisma";
import type { TranslateCreateRequest, TranslateRetrieveRequest, TranslateRetrieveResponse } from "./interfaces";

@Injectable()
export class TranslateService {
    readonly #_prisma: PrismaService

    constructor(prisma: PrismaService) {
        this.#_prisma = prisma
    }

    async translateRetrieve(payload: TranslateRetrieveRequest ): Promise<TranslateRetrieveResponse> {
        const module = await this.#_prisma.module.findFirst({
            where: {
                name: payload.module,
                deletedAt: null
            },
            select: {
                id: true
            }
        })

        if (!module) {
            throw new NotFoundException('Module not found')
        }

        const language = await this.#_prisma.language.findFirst({
            where: {
                title: payload.language,
            },
            select: {
                id: true
            }
        })

        if (!language) {
            throw new NotFoundException('Language not found')
        }

        const translate = await this.#_prisma.translate.findUnique({
            where: {
                code_moduleId_languageId: {
                    code: payload.code,
                    moduleId: module.id,
                    languageId: language.id
                }
            },
            select: {
                content: true
            }
        })

        if (translate) {
            throw new ConflictException('Already exists')
        }

        return translate 
    }

    async translateCreate(payload: TranslateCreateRequest): Promise<null> {
        const module = await this.#_prisma.module.findFirst({
            where: {
                name: payload.module,
                deletedAt: null
            },
            select: {
                id: true
            }
        })

        if (!module) {
            throw new NotFoundException('Module not found')
        }

        const language = await this.#_prisma.language.findFirst({
            where: {
                title: payload.language,
            },
            select: {
                id: true
            }
        })

        if (!language) {
            throw new NotFoundException('Language not found')
        }

        const translate = await this.#_prisma.translate.findUnique({
            where: {
                code_moduleId_languageId: {
                    code: payload.code,
                    moduleId: module.id,
                    languageId: language.id
                }
            }
        })

        if (translate) {
            throw new ConflictException('Already exists')
        }

        await this.#_prisma.translate.create({
            data: {
                code: payload.code,
                content: payload.content,
                languageId: language.id,
                moduleId: module.id
            }
        })

        return null 
    }
}