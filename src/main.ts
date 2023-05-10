import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';
import { ValidationPipe } from '@nestjs/common';
import "reflect-metadata";
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  /**
   * 使用NestExpressApplication 泛型实例启动
   */
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 添加数据校验
  app.useGlobalPipes(new ValidationPipe({
    forbidUnknownValues:false
  }))


  // 创建文档
  generateDocument(app)
  await app.listen(3000, '0.0.0.0');
}
bootstrap();

