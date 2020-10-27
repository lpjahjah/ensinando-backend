const { DataTypes } = require('sequelize');
const { Turma } = require('./Turma');

const db = require('../../database/index');

const Aula = db.define(
  'Aula',
  {
    cd_aula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nm_arquivo_conteudo: DataTypes.STRING(45),
    txt_conteudo_didatico: DataTypes.TEXT,
    nm_conteudo_aula: DataTypes.STRING(45),
    cd_turma: {
      type: DataTypes.INT,
      refernces: {
        model: Turma,
        key: 'cd_turma',
      },
    },
    nm_materia: {
      type: DataTypes.STRING(45),
      references: {
        model: Turma,
        key: 'nm_materia',
      },
    },
    cd_materia: {
      type: DataTypes.INTEGER,
      references: {
        model: Turma,
        key: 'cd_materia',
      },
    },
  },
  {
    db,
    tableName: 'aula',
  },
);

module.exports = Aula;
