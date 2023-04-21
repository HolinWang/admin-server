import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SystemService } from 'src/shared/system.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// 
// export class UserService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all user`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }



@Injectable()
export class UserService {
  constructor(private readonly systemService:SystemService){}

 
  create() {
    // 风格统一的异常处理
    // throw  new HttpException('自定义异常',HttpStatus.CONFLICT);
    return 'This action adds a new user'+'===这是sharedModule的环境：'+this.systemService.getEnv().env;
  }
}