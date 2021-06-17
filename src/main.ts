import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,

      // enable transformation for validation of types. Boolean, Numbers, String, or Class
      // typeOf, instanceOf
      transform: true,

      // add this to stop an API request if DTO is not valid or has extra items
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  );
  await app.listen(3000);
}
bootstrap();
