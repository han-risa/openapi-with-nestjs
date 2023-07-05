/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Put, HttpStatus, Delete, Param, Res} from '@nestjs/common';
import { PasiensServices } from './pasiens.service';
import { Pasiens } from './pasiens-entity';

@Controller('pasiens')
export class PasiensController {

    constructor(private service: PasiensServices) { }

    // @Get()
    // get(@Param() user:Pasien) {
    //     return this.service.getPasiens(user);
    // }
    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const pasiens = await this.service.findOne(id);
        return response.status(HttpStatus.OK).json({
            pasiens
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const pasiens = await this.service.findAll();
        return response.status(HttpStatus.OK).json({
            pasiens
        })
    }

    // @Post()
    // create(@Body() user: Pasien) {
    //     return this.service.createPasien(user);
    // }

    @Put()
    update(@Body() user: Pasiens) {
        return this.service.updatePasien(user);
    }

    // @Delete(':id')
    // deleteUser(@Param() params) {
    //     return this.service.deletePasien(params.id);
    // }
}