import { Injectable, } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Marca} from './entities/marca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarcasService {
  constructor(
  @InjectRepository(Marca)
        private readonly marcaRepo: Repository<Marca>
    ){}

    async create(createProductDto: CreateMarcaDto){
        const product = this.marcaRepo.create(createProductDto);
        await this.marcaRepo.save(product);
        return product;
    }

    findOne(id: number) {
        return this.marcaRepo.findOneBy({ id });
    }

    findAll(){
        return this.marcaRepo.find({
            order: { id: 'ASC'},
        });
    }

    async remove(id : number){
        const Product = await this.findOne(id);
        await this.marcaRepo.remove(Product);
        return 'marca eliminada sastifactoriamente';
    }
    
    async update(id: number, cambios: CreateMarcaDto){
        const oldProduct = await this.findOne(id);
        const updateProduct = await this.marcaRepo.merge(oldProduct, cambios);
        return this.marcaRepo.save(updateProduct);
    }
}
