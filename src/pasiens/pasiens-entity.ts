/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Pasiens {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    namaLengkap:string;

    @Column()
    noHp:string;

    @Column()
    alamat:string;

    @Column('date') 
    tanggalLahir:Date;

    @Column() 
    jenisKelamin:boolean;

    @Column()
    created_at:Date;

    @Column()
    updated_at:Date;
}