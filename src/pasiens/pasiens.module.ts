/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasiensServices } from './pasiens.service';
import { PasiensController } from './pasiens.controller';
import { Pasiens } from './pasiens-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pasiens])],
  exports: [TypeOrmModule],
  providers: [PasiensServices],
  controllers: [PasiensController],
})

export class PasiensModule { }