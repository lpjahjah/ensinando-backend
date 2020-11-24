const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Usuario = require('./Usuario');
const Exercicio = require('./Exercicio');
const QuestaoAlternativa = require('./QuestaoAlternativa');

const RespostaUsuario = db.define(
  'RespostaUsuario',
  {
    cd_resposta_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cd_login_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: 'cd_login_usuario',
      },
    },
    cd_exercicio: {
      type: DataTypes.INTEGER,
      references: {
        model: Exercicio,
        key: 'cd_exercicio',
      },
    },
    cd_alternativa: {
      type: DataTypes.INTEGER,
      references: {
        model: QuestaoAlternativa,
        key: 'cd_alternativa',
      },
    },
    txt_resposta_usuario: DataTypes.TEXT,
  },
  {
    db,
    tableName: 'resposta_usuario',
  },
);

module.exports = RespostaUsuario;
