import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExepctionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error'] });
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new AllExepctionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('SuperFlight API')
    .setDescription('Scheduled Flights App')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: { filter: true },
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
