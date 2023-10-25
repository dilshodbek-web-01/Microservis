import type { AxiosInstance } from 'axios'
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { TranslateCreateRequest, TranslateRetrieveRequest, TranslateRetrieveResponse } from './interfaces';

@Injectable()
export class LocalizationService {
    readonly #_axios: AxiosInstance

    constructor(config: ConfigService) {
        this.#_axios = axios.create({
            baseURL: config.getOrThrow<string>('localization.url'),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            validateStatus: (status: number) => status < 400 && status > 199,
            timeout: config.getOrThrow<number>('localization.timeout')
        })

    }

    async getTranslate(payload: TranslateRetrieveRequest): Promise<TranslateRetrieveResponse> {
        console.log(payload);
        
        try {
            const { data } = await this.#_axios.request({
                method: 'GET',
                url: 'translate',
                params: {
                    code: payload.code,
                    module: payload.module,
                    language: payload.language
                }
            })
            return data
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException(error)
        }
    }

    async createTranslate(payload: TranslateCreateRequest): Promise<null> {
        try {
            await this.#_axios.request({
                method: 'POST',
                url: '/translate',
                data: {
                    code: payload.code,
                    content: payload.content,
                    module: payload.module,
                    language: payload.language
                },
            })                

            return null
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }
}