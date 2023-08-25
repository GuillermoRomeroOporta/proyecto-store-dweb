import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Module } from "@nestjs/common";
import {UsersController} from './controllers/users.controller';
import {UsersService} from './services/Users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    controllers:[UsersController],
    providers:[UsersService],
})
export class UsersModule{}