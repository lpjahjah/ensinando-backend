const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const SituacaoPrazo = db.define(
  'SituacaoPrazo',
  {
    cd_situacao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nm_situacao: DataTypes.STRING(45),
  },
  {
    db,
    tableName: 'situacao_prazo',
  },
);

module.exports = SituacaoPrazo;
