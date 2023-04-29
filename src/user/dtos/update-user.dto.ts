import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// PartialType为类型推导工具
export class UpdateUserDto extends PartialType(CreateUserDto) {}
