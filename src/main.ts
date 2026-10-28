import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Async function to bootstrap the application
  const app = await NestFactory.create(AppModule); // Create a new instance of the Nest application

  app.enableCors(); // Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins

  app.setGlobalPrefix('api/v1'); // Set a global prefix for all routes in the application (e.g., /api/v1)

  app.useGlobalPipes(
    // Apply global validation pipes to the application
    new ValidationPipe({
      whitelist: true, // Strip properties that do not have any decorators
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
      transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
    }),
  );

  await app.listen(process.env.PORT ?? 3000); // Start the application and listen for incoming requests on the specified port (default is 3000)
}
await bootstrap(); // Call the bootstrap function to start the application
