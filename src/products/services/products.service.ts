import { InjectRepository } from "@nestjs/typeorm";
import { Product } from '../entities/product.entity';
import { Injectable, Delete } from '@nestjs/common';
import { Repository } from "typeorm";
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>
    ){}

    async create(createProductDto: CreateProductDto){
        const product = this.productRepo.create(createProductDto);
        await this.productRepo.save(product);
        return product;
    }

    findOne(id: number) {
        return this.productRepo.findOne({ where:{id}, relations:{autor: true,} });
    }

    findAll(){
        return this.productRepo.find({
            order: { id: 'ASC'},
        });
    }

    async remove(id : number){
        const Product = await this.findOne(id);
        await this.productRepo.remove(Product);
        return 'producto eliminado sastifactoriamente';
    }
    
    async update(id: number, cambios: CreateProductDto){
        const oldProduct = await this.findOne(id);
        const updateProduct = await this.productRepo.merge(oldProduct, cambios);
        return this.productRepo.save(updateProduct);
    }




}
    
    
    
