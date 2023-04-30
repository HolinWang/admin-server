import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, Min } from "class-validator";
import { Transform } from "class-transformer";
export class PaginationParamsDto {

    @ApiPropertyOptional({
        description:'Current Page Size',
        type:Number,
        example:5
    })
    @IsNumber()
    @IsOptional()
    @Min(0)
    @Transform(({value}) => parseInt(value,10))
    pageSize = 5;



    @ApiPropertyOptional({
        description:'Current Page',
        type:Number,
        example:1
    })
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Transform(({value}) => parseInt(value,10))
    currentPage = 1;


}