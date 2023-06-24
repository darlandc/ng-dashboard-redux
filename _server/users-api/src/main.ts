import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors({
    origin: 'http://localhost:4200', // Especifique a origem permitida (URL do aplicativo Angular)
    credentials: true, // Permita o envio de cookies e cabeçalhos de autenticação
  }));

  await app.listen(3000);
}

bootstrap();


