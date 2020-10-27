const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Atividade = require('./Atividade');
const Turma = require('./Turma');

const AtividadeTurma = db.define(
  'AtividadeTurma',
  {
    cd_atividade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Atividade,
        key: 'cd_atividade',
      },
    },
    cd_turma: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Turma,
        key: 'cd_turma',
      },
    },
  },
  {
    db,
    tableName: 'atividade_turma',
  },
);

module.exports = AtividadeTurma;
