import { Sequelize } from 'sequelize-typescript';
import { Pasiens } from './pasiens/pasiens.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'db_simrs',
      });
      sequelize.addModels([Pasiens]);
      await sequelize.sync();
      return sequelize;
    },
  },
];