import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { Request, Response, NextFunction } from 'express';

function globalMiddlewareOne(req: Request, res: Response, next: NextFunction){
  console.log('this is the global middleware 1')

}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddlewareOne)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
