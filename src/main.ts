import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('NestApplication');
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  await app.listen(PORT);
  logger.log(`Nest application init in ${PORT}`, 'InitApp')
}
bootstrap();
