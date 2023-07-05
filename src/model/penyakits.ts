import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface penyakitsAttributes {
  id: number;
  idDiag: string;
  penyakit: string;
  created_at?: Date;
  updated_at?: Date;
}

export type penyakitsPk = "id";
export type penyakitsId = penyakits[penyakitsPk];
export type penyakitsOptionalAttributes = "id" | "created_at" | "updated_at";
export type penyakitsCreationAttributes = Optional<penyakitsAttributes, penyakitsOptionalAttributes>;

export class penyakits extends Model<penyakitsAttributes, penyakitsCreationAttributes> implements penyakitsAttributes {
  id!: number;
  idDiag!: string;
  penyakit!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof penyakits {
    return penyakits.init({
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
    penyakit: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'penyakits',
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
