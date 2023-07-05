import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface diagnosisAttributes {
  id: number;
  namaLengkap: string;
  harga: number;
  created_at?: Date;
  updated_at?: Date;
}

export type diagnosisPk = "id";
export type diagnosisId = diagnosis[diagnosisPk];
export type diagnosisOptionalAttributes = "id" | "created_at" | "updated_at";
export type diagnosisCreationAttributes = Optional<diagnosisAttributes, diagnosisOptionalAttributes>;

export class diagnosis extends Model<diagnosisAttributes, diagnosisCreationAttributes> implements diagnosisAttributes {
  id!: number;
  namaLengkap!: string;
  harga!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof diagnosis {
    return diagnosis.init({
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
    tableName: 'diagnosis',
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
