import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { TcpOptions, Transport } from '@nestjs/microservices'
import { App } from './app'
import { appConfig } from './config'

setImmediate(async (): Promise<void> => {
  console.log(appConfig.options)
  const app = await NestFactory.createMicroservice<TcpOptions>(App, {
    transport: Transport.TCP,
    options: appConfig.options,
  })  

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
    }),
  )

  await app.listen()
})
