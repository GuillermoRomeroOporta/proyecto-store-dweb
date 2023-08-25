import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateModelDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //los decoradores en el dto validan que la informacion agregada sea correcta 

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    description:string ;


    @IsNumber()
    @IsNotEmpty()
    año: number;

}
