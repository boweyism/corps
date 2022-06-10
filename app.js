const dotenv = require('dotenv');
const { Sequelize, DataTypes, Model } = require('sequelize');

dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USERNAME, process.env.PG_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});



sequelize.authenticate();