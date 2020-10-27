const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const { Materia } = require('./Materia');

const Turma = db.define(
  'Turma',
  {
    cd_turma: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    cd_materia: {
      type: DataTypes.INTEGER,
      references: {
        model: Materia,
        key: 'cd_turma',
      },
    },
    nm_sala: DataTypes.STRING(45),
    dt_encerramento_turma: DataTypes.DATE,
    txt_conteudo_didatico: DataTypes.TEXT,
  },
  {
    db,
    tableName: 'turma',
  },
);

module.exports = Turma;
