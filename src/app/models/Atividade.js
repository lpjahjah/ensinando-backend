const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const SituacaoPrazo = require('./SituacaoPrazo');

const Atividade = db.define(
  'Atividade',
  {
    cd_atividade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cd_situacao: {
      type: DataTypes.INTEGER,
      references: {
        model: SituacaoPrazo,
        key: 'cd_situacao',
      },
    },
    dt_prazo: DataTypes.DATE,
    hr_prazo: DataTypes.TIME,
    nm_atividade: DataTypes.STRING(45),
  },
  {
    db,
    tableName: 'atividade',
  },
);

module.exports = Atividade;
