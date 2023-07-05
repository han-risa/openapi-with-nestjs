import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pasiensAttributes {
  id: number;
  namaLengkap: string;
  noHp: string;
  alamat: string;
  tanggalLahir: string;
  jenisKelamin: number;
  created_at: Date;
  updated_at: Date;
}

export type pasiensPk = "id";
export type pasiensId = pasiens[pasiensPk];
export type pasiensOptionalAttributes = "id" | "created_at" | "updated_at";
export type pasiensCreationAttributes = Optional<pasiensAttributes, pasiensOptionalAttributes>;

export class pasiens extends Model<pasiensAttributes, pasiensCreationAttributes> implements pasiensAttributes {
  id!: number;
  namaLengkap!: string;
  noHp!: string;
  alamat!: string;
  tanggalLahir!: string;
  jenisKelamin!: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof pasiens {
    return pasiens.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
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
        type: DataTypes.STRING(255),
        allowNull: false
      },
      tanggalLahir: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      jenisKelamin: {
        type: DataTypes.TINYINT,
        allowNull: false
      },
      created_at: '',
      updated_at: ''
    }, {
    sequelize,
    tableName: 'pasiens',
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
