import dotenv = require('dotenv');
import { Sequelize, DataTypes, Model } from 'sequelize';

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});



sequelize.authenticate();