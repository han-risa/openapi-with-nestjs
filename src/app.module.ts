/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasiens } from './pasiens/pasiens-entity'
import { PasiensModule } from './pasiens/pasiens.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "db_simrs",
      entities: [Pasiens],
      synchronize: true,
      autoLoadEntities: true
    }),
    PasiensModule
  ],
  controllers : [AppController],
  providers : [AppService],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
