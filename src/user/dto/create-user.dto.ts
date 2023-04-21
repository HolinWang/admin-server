import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, Length, Matches} from "class-validator"
export class CreateUserDto {

    @ApiProperty({example:'Holin'})
    @IsNotEmpty()
    @Length(1,100)
    name:string

    @ApiProperty({example:'Holin.wang@outlook.com'})
    @IsNotEmpty()
    email:string

    @ApiProperty({example:'18412887000'})
    @Matches(/^1\d{10}$/g, { message: '请输入手机号' })
    phoneNumber:string
}
