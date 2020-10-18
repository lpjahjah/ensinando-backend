const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');

const db = new Sequelize(dbConfig);

module.exports = db;
