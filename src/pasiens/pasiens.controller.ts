/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Put, HttpStatus, Delete, Param, Res} from '@nestjs/common';
import { PasiensServices } from './pasiens.service';
import { Pasiens } from './pasiens.model';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { SequelizeModule } from '@nestjs/sequelize';
import { pasiens } from 'src/model/pasiens';

@Controller('pasiens')
export class PasiensController {
    constructor(private service: PasiensServices) { }

    @Get('/:id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Pasiens,
    })
    @ApiParam({name: 'id'})
    findOne(@Param() params): Promise<pasiens> {
        return this.service.findOne(params.id);
    }

    @Get('/:start/:end')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Pasiens,
    })
    findDate(@Param('start') start: Date, @Param('end') end: Date): Promise<pasiens[]> {
        return this.service.findDate(start, end);
    }

    @Get()
    fetchAll(): Promise<pasiens[]> {
        return this.service.findAll();
    }

    
}