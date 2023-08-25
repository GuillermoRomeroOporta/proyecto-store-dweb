import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ModelsService {
    constructor(
      @InjectRepository(Model)
      private readonly ModelRepo: Repository<Model>
    ){}

  async create(createModelDto: CreateModelDto) {
    const model = this.ModelRepo.create(createModelDto);
    await this.ModelRepo.save(model);
    return model;
  }

  findOne(id: number) {
    return this.ModelRepo.findOne({ where:{id}, relations:{autor: true, Marca: true} });
}

findAll(){
    return this.ModelRepo.find({
        order: { id: 'ASC'},
    });
}

async remove(id : number){
    const Product = await this.findOne(id);
    await this.ModelRepo.remove(Product);
    return 'producto eliminado sastifactoriamente';
}

async update(id: number, cambios: CreateModelDto){
    const oldProduct = await this.findOne(id);
    const updateProduct = await this.ModelRepo.merge(oldProduct, cambios);
    return this.ModelRepo.save(updateProduct);
}
}
