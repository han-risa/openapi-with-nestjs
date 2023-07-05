/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Pasiens } from './pasiens/pasiens.model'
import { PasiensModule } from './pasiens/pasiens.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { PasiensController } from './pasiens/pasiens.controller';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_simrs',
      models: [Pasiens],
    }),
    PasiensModule
  ],
})
export class AppModule {

}
