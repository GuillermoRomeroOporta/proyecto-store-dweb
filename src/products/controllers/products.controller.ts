import { Body, Controller, Get, ParseIntPipe, Post, Param, Delete, Patch } from "@nestjs/common";
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from "../dto/product.dto";

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}

    @Post()
    async create(@Body() productDto: CreateProductDto){
        return await this.productsService.create(productDto);
    }

@Get()
findAll(){
    return this.productsService.findAll();
}

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number){
    return this.productsService.findOne(id);
}

@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number){
    return this.productsService.remove(id);
}

@Patch(':id')
update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProductDto: CreateProductDto,
){
    return this.productsService.update(id, createProductDto);
}


}