/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Put, HttpStatus, Delete, Param, Res} from '@nestjs/common';
import { PasiensServices } from './pasiens.service';
import { Pasiens } from './pasiens.model';
import { ApiResponse } from '@nestjs/swagger';
import { SequelizeModule } from '@nestjs/sequelize';

@Controller('pasiens')
export class PasiensController {
    constructor(private service: PasiensServices) { }

    @Get('/:id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Pasiens,
    })
    findOne(@Param('id') id: number) {
        const pasiens = Pasiens.findAll<Pasiens>({
            where: {
              id: id
            }
        });
        return pasiens;
    }

    // @Get('/:start-end')
    // @ApiResponse({
    //     status: 200,
    //     description: 'The found record',
    //     type: Pasiens,
    // })
    // findDate(@Param('start') start: Date, @Param('end') end: Date) {
    //     const firstUser = AppDataSource
    //     .getRepository(Pasiens)
    //     .createQueryBuilder("pasiens")
    //     .where("pasiens.created_at")
    //     .getOne()
        
    //     return firstUser;
    // }

    @Get()
    fetchAll(@Res() response) {
        return this.service.findAll();
    }

    
}