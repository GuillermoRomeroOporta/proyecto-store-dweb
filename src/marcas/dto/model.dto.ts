import { IsNotEmpty, IsNumber, IsString, MaxLength, isNotEmpty, isNumber } from "class-validator";

export class CreateModelDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;
   
    @IsNotEmpty()
    @IsNumber()
    marca_id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

}
