import { Sequelize } from 'sequelize';

const postgres = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  port: Number(process.env.DB_PORT) || 5432,
});

(async () => {
  try {
    postgres.authenticate();
    console.log('Connection has been established successfully');
  } catch (error) {
    console.log('Unnable to connect to the database:', error);
  }
})();
