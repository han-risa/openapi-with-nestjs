import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dokters, doktersId } from './dokters';
import type { obats, obatsId } from './obats';
import type { pasien, pasienId } from './pasien';

export interface transaksisAttributes {
  id: number;
  dokter_id: number;
  pasien_id: number;
  obat_id: number;
  status: number;
  created_at?: Date;
  updated_at?: Date;
}

export type transaksisPk = "id";
export type transaksisId = transaksis[transaksisPk];
export type transaksisOptionalAttributes = "id" | "status" | "created_at" | "updated_at";
export type transaksisCreationAttributes = Optional<transaksisAttributes, transaksisOptionalAttributes>;

export class transaksis extends Model<transaksisAttributes, transaksisCreationAttributes> implements transaksisAttributes {
  id!: number;
  dokter_id!: number;
  pasien_id!: number;
  obat_id!: number;
  status!: number;
  created_at?: Date;
  updated_at?: Date;

  // transaksis belongsTo dokters via dokter_id
  dokter!: dokters;
  getDokter!: Sequelize.BelongsToGetAssociationMixin<dokters>;
  setDokter!: Sequelize.BelongsToSetAssociationMixin<dokters, doktersId>;
  createDokter!: Sequelize.BelongsToCreateAssociationMixin<dokters>;
  // transaksis belongsTo obats via obat_id
  obat!: obats;
  getObat!: Sequelize.BelongsToGetAssociationMixin<obats>;
  setObat!: Sequelize.BelongsToSetAssociationMixin<obats, obatsId>;
  createObat!: Sequelize.BelongsToCreateAssociationMixin<obats>;
  // transaksis belongsTo pasien via pasien_id
  pasien!: pasien;
  getPasien!: Sequelize.BelongsToGetAssociationMixin<pasien>;
  setPasien!: Sequelize.BelongsToSetAssociationMixin<pasien, pasienId>;
  createPasien!: Sequelize.BelongsToCreateAssociationMixin<pasien>;

  static initModel(sequelize: Sequelize.Sequelize): typeof transaksis {
    return transaksis.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dokter_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'dokters',
        key: 'id'
      }
    },
    pasien_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pasien',
        key: 'id'
      }
    },
    obat_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'obats',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'transaksis',
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
        name: "transaksis_obat_id_foreign",
        using: "BTREE",
        fields: [
          { name: "obat_id" },
        ]
      },
      {
        name: "transaksis_pasien_id_foreign",
        using: "BTREE",
        fields: [
          { name: "pasien_id" },
        ]
      },
      {
        name: "transaksis_dokter_id_foreign",
        using: "BTREE",
        fields: [
          { name: "dokter_id" },
        ]
      },
    ]
  });
  }
}
