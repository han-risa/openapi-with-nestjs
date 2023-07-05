import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface gejalasAttributes {
  id: number;
  idDiag: string;
  name: string;
  value: string;
  created_at?: Date;
  updated_at?: Date;
}

export type gejalasPk = "id";
export type gejalasId = gejalas[gejalasPk];
export type gejalasOptionalAttributes = "id" | "created_at" | "updated_at";
export type gejalasCreationAttributes = Optional<gejalasAttributes, gejalasOptionalAttributes>;

export class gejalas extends Model<gejalasAttributes, gejalasCreationAttributes> implements gejalasAttributes {
  id!: number;
  idDiag!: string;
  name!: string;
  value!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof gejalas {
    return gejalas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    idDiag: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gejalas',
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
