import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { SharedModule } from 'src/shared/shared.module';
import { UserProviders } from './user.providers';
import { RoleService } from './services/role.service';
import { RoleController } from './controllers/role.controller';

@Module({
  controllers: [UserController,RoleController],
  providers: [UserService,...UserProviders,RoleService],
  // 导入shared模块
  imports:[SharedModule]
})
export class UserModule {}
