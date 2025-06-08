import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: 'https://fronted-beige.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Solo si usas cookies o auth
});


  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Application is running on port: ${port}`);
}
bootstrap();
