import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface diagnosasAttributes {
  id: number;
  namaLengkap: string;
  harga: number;
  created_at?: Date;
  updated_at?: Date;
}

export type diagnosasPk = "id";
export type diagnosasId = diagnosas[diagnosasPk];
export type diagnosasOptionalAttributes = "id" | "created_at" | "updated_at";
export type diagnosasCreationAttributes = Optional<diagnosasAttributes, diagnosasOptionalAttributes>;

export class diagnosas extends Model<diagnosasAttributes, diagnosasCreationAttributes> implements diagnosasAttributes {
  id!: number;
  namaLengkap!: string;
  harga!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof diagnosas {
    return diagnosas.init({
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
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'diagnosas',
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
