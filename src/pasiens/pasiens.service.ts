/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { karyawans } from './src/model/karyawans';
import { initModels } from 'src/model/init-models';

@Injectable()
export class PasiensServices {
    sequelize = new Sequelize('db_simrs', 'root', '', {host: 'localhost', dialect: 'mysql'})

    // private readonly karyawans : karyawans[] = [];

    constructor(
        @InjectModel(karyawans)
       private pasienModel: typeof karyawans, 
    ) 
    {}

    async findAll(): Promise<karyawans[]> {
        initModels(this.sequelize)
        return this.pasienModel.findAll({
            attributes: ['namaLengkap', 'alamat']
        });
    }

    findOne(id: number): Promise<karyawans[]> {
        initModels(this.sequelize)
        return this.pasienModel.findAll({
            where: {
            id: id,
          },
          attributes: ['namaLengkap', 'alamat'],
        });
    }

    async remove(id: number): Promise<void> {
        initModels(this.sequelize)
        const user = await this.pasienModel.findOne();
        await user.destroy();
    }
}