import type { Sequelize } from "sequelize";
import { admins as _admins } from "./admins";
import type { adminsAttributes, adminsCreationAttributes } from "./admins";
import { apotekers as _apotekers } from "./apotekers";
import type { apotekersAttributes, apotekersCreationAttributes } from "./apotekers";
import { diagnosas as _diagnosas } from "./diagnosas";
import type { diagnosasAttributes, diagnosasCreationAttributes } from "./diagnosas";
import { diagnosis as _diagnosis } from "./diagnosis";
import type { diagnosisAttributes, diagnosisCreationAttributes } from "./diagnosis";
import { dokters as _dokters } from "./dokters";
import type { doktersAttributes, doktersCreationAttributes } from "./dokters";
import { failed_jobs as _failed_jobs } from "./failed_jobs";
import type { failed_jobsAttributes, failed_jobsCreationAttributes } from "./failed_jobs";
import { gejalas as _gejalas } from "./gejalas";
import type { gejalasAttributes, gejalasCreationAttributes } from "./gejalas";
import { karyawans as _karyawans } from "./karyawans";
import type { karyawansAttributes, karyawansCreationAttributes } from "./karyawans";
import { migrations as _migrations } from "./migrations";
import type { migrationsAttributes, migrationsCreationAttributes } from "./migrations";
import { obats as _obats } from "./obats";
import type { obatsAttributes, obatsCreationAttributes } from "./obats";
import { pasien as _pasien } from "./pasien";
import type { pasienAttributes, pasienCreationAttributes } from "./pasien";
import { pasiens as _pasiens } from "./pasiens";
import type { pasiensAttributes, pasiensCreationAttributes } from "./pasiens";
import { password_resets as _password_resets } from "./password_resets";
import type { password_resetsAttributes, password_resetsCreationAttributes } from "./password_resets";
import { penyakits as _penyakits } from "./penyakits";
import type { penyakitsAttributes, penyakitsCreationAttributes } from "./penyakits";
import { personal_access_tokens as _personal_access_tokens } from "./personal_access_tokens";
import type { personal_access_tokensAttributes, personal_access_tokensCreationAttributes } from "./personal_access_tokens";
import { transaksis as _transaksis } from "./transaksis";
import type { transaksisAttributes, transaksisCreationAttributes } from "./transaksis";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _admins as admins,
  _apotekers as apotekers,
  _diagnosas as diagnosas,
  _diagnosis as diagnosis,
  _dokters as dokters,
  _failed_jobs as failed_jobs,
  _gejalas as gejalas,
  _karyawans as karyawans,
  _migrations as migrations,
  _obats as obats,
  _pasien as pasien,
  _pasiens as pasiens,
  _password_resets as password_resets,
  _penyakits as penyakits,
  _personal_access_tokens as personal_access_tokens,
  _transaksis as transaksis,
  _users as users,
};

export type {
  adminsAttributes,
  adminsCreationAttributes,
  apotekersAttributes,
  apotekersCreationAttributes,
  diagnosasAttributes,
  diagnosasCreationAttributes,
  diagnosisAttributes,
  diagnosisCreationAttributes,
  doktersAttributes,
  doktersCreationAttributes,
  failed_jobsAttributes,
  failed_jobsCreationAttributes,
  gejalasAttributes,
  gejalasCreationAttributes,
  karyawansAttributes,
  karyawansCreationAttributes,
  migrationsAttributes,
  migrationsCreationAttributes,
  obatsAttributes,
  obatsCreationAttributes,
  pasienAttributes,
  pasienCreationAttributes,
  pasiensAttributes,
  pasiensCreationAttributes,
  password_resetsAttributes,
  password_resetsCreationAttributes,
  penyakitsAttributes,
  penyakitsCreationAttributes,
  personal_access_tokensAttributes,
  personal_access_tokensCreationAttributes,
  transaksisAttributes,
  transaksisCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const admins = _admins.initModel(sequelize);
  const apotekers = _apotekers.initModel(sequelize);
  const diagnosas = _diagnosas.initModel(sequelize);
  const diagnosis = _diagnosis.initModel(sequelize);
  const dokters = _dokters.initModel(sequelize);
  const failed_jobs = _failed_jobs.initModel(sequelize);
  const gejalas = _gejalas.initModel(sequelize);
  const karyawans = _karyawans.initModel(sequelize);
  const migrations = _migrations.initModel(sequelize);
  const obats = _obats.initModel(sequelize);
  const pasien = _pasien.initModel(sequelize);
  const pasiens = _pasiens.initModel(sequelize);
  const password_resets = _password_resets.initModel(sequelize);
  const penyakits = _penyakits.initModel(sequelize);
  const personal_access_tokens = _personal_access_tokens.initModel(sequelize);
  const transaksis = _transaksis.initModel(sequelize);
  const users = _users.initModel(sequelize);

  transaksis.belongsTo(dokters, { as: "dokter", foreignKey: "dokter_id"});
  dokters.hasMany(transaksis, { as: "transakses", foreignKey: "dokter_id"});
  transaksis.belongsTo(obats, { as: "obat", foreignKey: "obat_id"});
  obats.hasMany(transaksis, { as: "transakses", foreignKey: "obat_id"});
  transaksis.belongsTo(pasien, { as: "pasien", foreignKey: "pasien_id"});
  pasien.hasMany(transaksis, { as: "transakses", foreignKey: "pasien_id"});

  return {
    admins: admins,
    apotekers: apotekers,
    diagnosas: diagnosas,
    diagnosis: diagnosis,
    dokters: dokters,
    failed_jobs: failed_jobs,
    gejalas: gejalas,
    karyawans: karyawans,
    migrations: migrations,
    obats: obats,
    pasien: pasien,
    pasiens: pasiens,
    password_resets: password_resets,
    penyakits: penyakits,
    personal_access_tokens: personal_access_tokens,
    transaksis: transaksis,
    users: users,
  };
}
