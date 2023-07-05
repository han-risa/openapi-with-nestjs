import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transaksis, transaksisId } from './transaksis';

export interface doktersAttributes {
  id: number;
  namaLengkap: string;
  username: string;
  password: string;
  alamat: string;
  noHp: string;
  jenisKelamin: number;
  tempatLahir: string;
  tanggalLahir: string;
  created_at?: Date;
  updated_at?: Date;
}

export type doktersPk = "id";
export type doktersId = dokters[doktersPk];
export type doktersOptionalAttributes = "id" | "created_at" | "updated_at";
export type doktersCreationAttributes = Optional<doktersAttributes, doktersOptionalAttributes>;

export class dokters extends Model<doktersAttributes, doktersCreationAttributes> implements doktersAttributes {
  id!: number;
  namaLengkap!: string;
  username!: string;
  password!: string;
  alamat!: string;
  noHp!: string;
  jenisKelamin!: number;
  tempatLahir!: string;
  tanggalLahir!: string;
  created_at?: Date;
  updated_at?: Date;

  // dokters hasMany transaksis via dokter_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof dokters {
    return dokters.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    namaLengkap: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "dokters_username_unique"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    noHp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    jenisKelamin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tempatLahir: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tanggalLahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dokters',
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
      {
        name: "dokters_username_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
