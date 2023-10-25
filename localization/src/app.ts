import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from '@configs';
import { LanguageModule, TranslateModule } from '@module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true
    }),
    TranslateModule,
    LanguageModule
  ],
})
export class App {}
