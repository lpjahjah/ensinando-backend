const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const { Materia } = require('./Materia');

const Turma = db.define(
  'Turma',
  {
    cd_turma: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cd_materia: {
      type: DataTypes.INTEGER,
      references: {
        model: Materia,
        key: 'cd_turma',
      },
    },
    nm_turma: DataTypes.STRING(45),
    dt_criacao: DataTypes.DATE,
  },
  {
    db,
    tableName: 'turma',
  },
);

module.exports = Turma;
