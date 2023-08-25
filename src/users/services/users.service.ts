import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from '../dto/user.dto';
import { User } from "../entities/user.entity";


@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ){}

    async create(CreateUserDto: CreateUserDto){
        const user = this.userRepo.create(CreateUserDto);
        await this.userRepo.save(user);
        return user;
    }

    findOne(id: number) {
        return this.userRepo.findOneBy({ id });
    }

    findAll(){
        return this.userRepo.find({
            order: { id: 'ASC'},
        });
    }
    

    async remove(id : number){
        const Product = await this.findOne(id);
        await this.userRepo.remove(Product);
        return 'usuario eliminado sastifactoriamente';
    }
    
    async update(id: number, cambios: CreateUserDto){
        const oldProduct = await this.findOne(id);
        const updateProduct = await this.userRepo.merge(oldProduct, cambios);
        return this.userRepo.save(updateProduct);
    }
    
}