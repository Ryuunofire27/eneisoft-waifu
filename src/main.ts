import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Validation } from './common/validation.pipe';
import {
  NestExpressApplication, ExpressAdapter
} from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const logger = new Logger('NestApplication');
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());
  const options = new DocumentBuilder()
    .setTitle('Waifu example')
    .setDescription('The waifu API description')
    .setVersion('1.0')
    .setBasePath('/api/v1')
    .build();

  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  app.setGlobalPrefix('/api/v1')
  app.enableCors();
  app.useGlobalPipes(new Validation())
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1', app, document);

  await app.listen(PORT);
  
  logger.log(`Nest application init in ${PORT}`, 'InitApp')
}
bootstrap();
