'use strict';
require("dotenv").config();
const { Sequelize } = require('sequelize');
console.log(process.env.DB_NAME, process.env.DB_HOST)
// Configure Sequelize to use PostgreSQL
const sequelize = new Sequelize(
    `postgres://${process.env.USER}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    dialect: 'postgres',
    logging: false
});   

// Test the connection
async function connectPostgresql() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection successful.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectPostgresql();
module.exports = {
    Sequelize: sequelize,
    connectPostgresql
}