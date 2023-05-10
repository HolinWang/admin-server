import { ApiProperty } from "@nestjs/swagger";

export class UploadDTO{
  @ApiProperty({
    example:'***文件'
  })
  nams:string;

  @ApiProperty({
    type:'string',
    format:'binary',
    required:true
  })
  file:Express.Multer.File
}