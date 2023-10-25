import { registerAs } from '@nestjs/config'

declare interface LocalizationServiceOptions {
  url?: string
  timeout?: number
}

export const localizationConfig = registerAs<LocalizationServiceOptions>(
  'localization', (): LocalizationServiceOptions => ({
    url: process.env.LOCALIZATION_SERVICE_URL,
    timeout: process.env.LOCALIZATION_SERVICE_TIMEOUT
      ? parseInt(process.env.LOCALIZATION_SERVICE_TIMEOUT, 10)
      : undefined,
  }),
)
