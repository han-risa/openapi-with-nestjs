import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface apotekersAttributes {
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

export type apotekersPk = "id";
export type apotekersId = apotekers[apotekersPk];
export type apotekersOptionalAttributes = "id" | "created_at" | "updated_at";
export type apotekersCreationAttributes = Optional<apotekersAttributes, apotekersOptionalAttributes>;

export class apotekers extends Model<apotekersAttributes, apotekersCreationAttributes> implements apotekersAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof apotekers {
    return apotekers.init({
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
      unique: "apotekers_username_unique"
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
    tableName: 'apotekers',
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
        name: "apotekers_username_unique",
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
