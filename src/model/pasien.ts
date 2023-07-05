import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transaksis, transaksisId } from './transaksis';

export interface pasienAttributes {
  id: number;
  namaLengkap: string;
  noHp: string;
  alamat: string;
  tanggalLahir: string;
  jenisKelamin: number;
  created_at?: Date;
  updated_at?: Date;
}

export type pasienPk = "id";
export type pasienId = pasien[pasienPk];
export type pasienOptionalAttributes = "created_at" | "updated_at";
export type pasienCreationAttributes = Optional<pasienAttributes, pasienOptionalAttributes>;

export class pasien extends Model<pasienAttributes, pasienCreationAttributes> implements pasienAttributes {
  id!: number;
  namaLengkap!: string;
  noHp!: string;
  alamat!: string;
  tanggalLahir!: string;
  jenisKelamin!: number;
  created_at?: Date;
  updated_at?: Date;

  // pasien hasMany transaksis via pasien_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof pasien {
    return pasien.init({
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    namaLengkap: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    noHp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tanggalLahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    jenisKelamin: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pasien',
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
