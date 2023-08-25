import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Model])],
  exports: [TypeOrmModule],
  controllers: [ModelsController],
  providers: [ModelsService]
})
export class ModelsModule {}
