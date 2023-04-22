import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SystemService } from 'src/shared/system.service';
import { MongoRepository } from 'typeorm';
import { User } from '../entities/user.mongo.entity';
import { AppLogger } from 'src/shared/logger/logger.service';
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
  constructor(
    private readonly systemService:SystemService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository:MongoRepository<User>,
    private readonly logger: AppLogger
    ){
      // 设置打印日志上下文
      this.logger.setContext(UserService.name)
    }

 
  create() {
    // 风格统一的异常处理
    // throw  new HttpException('自定义异常',HttpStatus.CONFLICT);

    // 打印日志
    this.logger.info(null,'user create',{
      name: 'info-holin wang'
    })

    this.logger.debug(null,'user create',{
      name: 'debug-holin wang'
    })

    return 'This action adds a new user'+'===这是sharedModule的环境：'+this.systemService.getEnv().env+"===userRepository=="+this.userRepository.save({
      name:'holin'
    });
  }

  findAll(){
    return this.userRepository.findAndCount({})
  }
}