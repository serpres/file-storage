import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.use('/uploads', express.static(join(__dirname, 'uploads')));
  console.log(__dirname);
  const config = new DocumentBuilder()
    .setTitle('Облачное хранище')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.enableCors({ credentials: true, origin: true });
  await app.listen(3000);
}

bootstrap();
