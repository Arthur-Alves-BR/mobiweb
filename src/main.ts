import { AppModule } from './app.module';
import { mainConfig } from './main.config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mainConfig(app);
  await app.listen(3000);
}
bootstrap();
