import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { SystemService } from '../../shared/system.service';
import { MongoRepository } from 'typeorm';
import { User } from '../entities/user.mongo.entity';
import { AppLogger } from 'src/shared/logger/logger.service';
import { PaginationParamsDto } from '../../shared/dtos/pagination-params.dto';
import { encryptoPassword, makeSalt } from 'src/utils/crypto.util';


@Injectable()
export class UserService {
  constructor(private readonly systemService: SystemService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>,
    private readonly logger: AppLogger
  ) {
    this.logger.setContext(UserService.name)
  }

  create(userDto: CreateUserDto) {

    // 加密处理
    if(userDto.password){
      const {salt,hashPasswaord} = this.getPasswaord(userDto.password);
      userDto.salt = salt;
      userDto.password = hashPasswaord;
    }
    // 调用Modle
    // return 'This action adds a 🚀 new user';
    return this.userRepository.save(userDto)
  }

  async findAll({ pageSize, currentPage }: PaginationParamsDto): Promise<{ data: User[], count: number }> {

    const [data, count] = await this.userRepository.findAndCount({
      order: { name: 'DESC' },
      skip: (currentPage - 1) * pageSize,
      take: (pageSize * 1),
      cache: true
    })

    // 100 => 第二页 5 6-10
    return {
      data, count
    }
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy(id)

  }

  async update(id: string, user: CreateUserDto) {
    // 加密处理
    if(user.password){
      const {salt,hashPasswaord} = this.getPasswaord(user.password);
      user.salt = salt;
      user.password = hashPasswaord;
    }
    return await this.userRepository.update(id, user)
  }

  async remove(id: string): Promise<any> {
    return await this.userRepository.delete(id)
  }

  // 密码加密
  getPasswaord(password){
    const salt = makeSalt();
    const hashPasswaord = encryptoPassword(password,salt);
    return {salt,hashPasswaord};
  }
}