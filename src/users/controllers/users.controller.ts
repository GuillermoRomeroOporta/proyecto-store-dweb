import { Body, Controller, Delete, Post, Param, Get, Patch, ParseIntPipe} from "@nestjs/common";
import { UsersService } from "../services/Users.service";
import { CreateUserDto } from "../dto/user.dto";


@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Post()
    async create(@Body()userDto: CreateUserDto){
        return await this.usersService.create(userDto);
    }

    @Get()
findAll(){
    return this.usersService.findAll();
}

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number){
    return this.usersService.findOne(id);
}

@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number){
    return this.usersService.remove(id);
}

@Patch(':id')
update(
    @Param('id', ParseIntPipe) id: number,
    @Body() CreateUserDto: CreateUserDto,
){
    return this.usersService.update(id, CreateUserDto);
}
 }