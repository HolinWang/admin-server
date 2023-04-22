import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@Controller('user')
@ApiTags("用户管理")
export class UserController {
  constructor(
    private readonly userService:UserService,
    // 注入环境变量
    private readonly configService: ConfigService
    ) {}
  @Post()
  @ApiOperation({
    summary:"新增用户"
  })
  @ApiResponse({
    status:HttpStatus.CREATED,
    type:CreateUserDto
  })
  create(@Body() createUserDto: CreateUserDto) {
    console.log('env:',this.configService.get<string>('database.url'))
    return this.userService.create()
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
