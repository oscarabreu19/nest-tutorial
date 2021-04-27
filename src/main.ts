import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';

async function bootstrap(Logger) {
    const port = 3000;
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
    Logger.log(`Port: ${port}`);
}

const logger = new Logger(bootstrap.name);
bootstrap(logger);
