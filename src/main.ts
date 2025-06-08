import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://fronted-semanaa8-wd5e.vercel.app',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Application is running on port: ${port}`);
}
bootstrap();
