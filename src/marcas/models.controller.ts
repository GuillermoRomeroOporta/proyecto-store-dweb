import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ModelsService } from './models.service';
import { CreateModelDto, } from './dto/model.dto';


@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Post()
  async create(@Body() ModelDto: CreateModelDto) {
    return await this.modelsService.create(ModelDto);
  }

  @Get()
  findAll() {
    return this.modelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number){
    return this.modelsService.findOne(id);
  }

  @Patch(':id')
  update
    (@Param('id', ParseIntPipe) id: number,
     @Body() createModelDto: CreateModelDto,
     ) {
    return this.modelsService.update(id, createModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modelsService.remove(+id);
  }
}
