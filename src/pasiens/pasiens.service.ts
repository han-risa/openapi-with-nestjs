/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { pasiens } from './src/model/pasiens';
import { initModels, pasien } from 'src/model/init-models';

@Injectable()
export class PasiensServices {
    sequelize = new Sequelize('db_simrs', 'root', '', {host: 'localhost', dialect: 'mysql'})

    // private readonly karyawans : karyawans[] = [];

    constructor(
        @InjectModel(pasiens)
       private pasienModel: typeof pasiens, 
    ) 
    {}

    async findAll(): Promise<pasiens[]> {
        initModels(this.sequelize)
        return this.pasienModel.findAll();
    }

    findOne(id: number): Promise<pasiens> {
        initModels(this.sequelize)
        return this.pasienModel.findOne({
            where: {
            id: id,
          },
        });
    }

    async findDate(startDate: Date, endDate:Date): Promise<pasiens[]> {
        initModels(this.sequelize)
        const {Op} = require("sequelize");
        return this.pasienModel.findAll({
            where: {
                created_at: {
                    [Op.between]: [startDate + " 00:00:00", endDate + " 00:00:00"]
                }
            },
        });
    }

    async remove(id: number): Promise<void> {
        initModels(this.sequelize)
        const user = await this.pasienModel.findOne();
        await user.destroy();
    }
}