import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { PaginaationParamsDto } from 'src/shared/dtos/pagination-params.dto';

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
  @ApiOperation({
    summary:"查找所有用户"
  })
  async findAll(
    @Query() query: PaginaationParamsDto
  ) {
    const {data,count} = await this.userService.findAll(query);
    return {
      data,
      meta:{total:count}
    }
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
