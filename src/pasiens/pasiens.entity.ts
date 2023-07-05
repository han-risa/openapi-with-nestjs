/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { PrimaryColumn } from 'typeorm';
import { DataTypes } from 'sequelize'

@Table
export class Pasiens extends Model {

    @Column({primaryKey: true})
    id: number;

    @Column
    @ApiProperty({
        example: 'Dadang', description: 'Nama Pasien'
    })
    namaLengkap:string;

    @Column
    @ApiProperty({
        example: '0856-0632-8879', description: 'No.Hp Pasien'
    })
    noHp:string;

    @Column
    @ApiProperty({
        example: 'Jalan Raya', description: 'Alamat Pasien'
    })
    alamat:string;

    @Column('date') 
    @ApiProperty({
        example: '2001-03-02', description: 'Tanggal Lahir Pasien'
    })
    tanggalLahir:Date;

    @Column
    @ApiProperty({
        example: 'true', 
        description: 'Jenis Kelamin (true=laki-laki false=perempuan)'
    })
    jenisKelamin:boolean;

    @Column
    created_at:Date;

    @Column
    updated_at:Date;
}