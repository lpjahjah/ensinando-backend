const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Materia = db.define(
  'Materia',
  {
    cd_materia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nm_materia: DataTypes.STRING(45),
  },
  {
    db,
    tableName: 'materia',
  },
);

module.exports = Materia;
