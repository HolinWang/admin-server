import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { SharedModule } from 'src/shared/shared.module';
import { UserProviders } from './user.providers';

@Module({
  controllers: [UserController],
  providers: [UserService,...UserProviders],
  // 导入shared模块
  imports:[SharedModule]
})
export class UserModule {}
