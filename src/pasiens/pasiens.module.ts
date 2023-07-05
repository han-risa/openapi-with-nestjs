/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PasiensServices } from './pasiens.service';
import { PasiensController } from './pasiens.controller';
import { DatabaseModule } from 'src/database.module';
import { pasiensProviders } from './pasiens.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pasiens } from './pasiens.model';
import { karyawans } from 'src/model/karyawans';

@Module({
  // providers: [PasiensServices],
  // controllers: [PasiensController],
  providers: [PasiensServices],
  exports: [SequelizeModule],
  imports: [SequelizeModule.forFeature([karyawans])],
  controllers: [PasiensController]
})

export class PasiensModule { }