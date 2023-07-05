/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pasiens } from './pasiens-entity';

@Injectable()
export class PasiensServices {

    constructor(@InjectRepository(Pasiens) private pasiensRepository: Repository<Pasiens>) { }

    findAll(): Promise<Pasiens[]> {
        return this.pasiensRepository.find();
    }

    // findAll(): Promise<Pasiens[]> {
    //   return this.pasiensRepository.find({
    //     select: ["id", "namaLengkap", "noHp", "alamat", "tanggalLahir", "jenisKelamin"],
    //   });
    // }

    // getPasien(_id: number): Promise<Pasien[]> {
    //     return await this.pasiensRepository.find({
    //         select: ["id", "namaLengkap", "noHp", "alamat", "tanggalLahir", "jenisKelamin", "created_at"],
    //         where: [{ "id": _id }]
    //     });
    // }

    updatePasien(pasien: Pasiens) {
        this.pasiensRepository.save(pasien);
    }

    findOne(id: number): Promise<Pasiens | null> {
      return this.pasiensRepository.findOneBy({id});
    }

    // async deletePasien(pasien: Pasien) {
    //     this.pasiensRepository.delete(pasien);
    // }
}