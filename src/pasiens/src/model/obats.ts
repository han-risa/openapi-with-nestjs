import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transaksis, transaksisId } from './transaksis';

export interface obatsAttributes {
  id: number;
  nama: string;
  deskripsi: string;
  jumlah: number;
  harga: number;
  tanggalKadaluarsa: string;
  created_at?: Date;
  updated_at?: Date;
}

export type obatsPk = "id";
export type obatsId = obats[obatsPk];
export type obatsOptionalAttributes = "id" | "created_at" | "updated_at";
export type obatsCreationAttributes = Optional<obatsAttributes, obatsOptionalAttributes>;

export class obats extends Model<obatsAttributes, obatsCreationAttributes> implements obatsAttributes {
  id!: number;
  nama!: string;
  deskripsi!: string;
  jumlah!: number;
  harga!: number;
  tanggalKadaluarsa!: string;
  created_at?: Date;
  updated_at?: Date;

  // obats hasMany transaksis via obat_id
  transakses!: transaksis[];
  getTransakses!: Sequelize.HasManyGetAssociationsMixin<transaksis>;
  setTransakses!: Sequelize.HasManySetAssociationsMixin<transaksis, transaksisId>;
  addTransakse!: Sequelize.HasManyAddAssociationMixin<transaksis, transaksisId>;
  addTransakses!: Sequelize.HasManyAddAssociationsMixin<transaksis, transaksisId>;
  createTransakse!: Sequelize.HasManyCreateAssociationMixin<transaksis>;
  removeTransakse!: Sequelize.HasManyRemoveAssociationMixin<transaksis, transaksisId>;
  removeTransakses!: Sequelize.HasManyRemoveAssociationsMixin<transaksis, transaksisId>;
  hasTransakse!: Sequelize.HasManyHasAssociationMixin<transaksis, transaksisId>;
  hasTransakses!: Sequelize.HasManyHasAssociationsMixin<transaksis, transaksisId>;
  countTransakses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof obats {
    return obats.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggalKadaluarsa: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'obats',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
