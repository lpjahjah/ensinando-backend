const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const { Exercicio } = require('./Exercicio');

const QuestaoAlternativa = db.define(
  'QuestaoAlternativa',
  {
    cd_alternativa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    txt_alternativa: DataTypes.TEXT,
    ic_alternativa_correta: DataTypes.BOOLEAN,
    nm_alternativa: DataTypes.STRING,
    cd_exercicio: {
      type: DataTypes.INTEGER,
      references: {
        model: Exercicio,
        key: 'cd_exercicio',
      },
    },
  },
  {
    db,
    tableName: 'questao_alternativa',
  },
);

module.exports = QuestaoAlternativa;
