const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Atividade = require('./Atividade');

const Exercicio = db.define(
  'Exercicio',
  {
    cd_exercicio:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    txt_exercicio: DataTypes.TEXT,
    ic_dissertativo: DataTypes.BOOLEAN,
    cd_atividade: {
      type: DataTypes.INTEGER,
      references: {
        model: Atividade,
        key: 'cd_atividade',
      },
    },
  },
  {
    db,
    tableName: 'exercicio',
  },
);

module.exports = Exercicio;
