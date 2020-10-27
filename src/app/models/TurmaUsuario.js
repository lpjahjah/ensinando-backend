const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Usuario = require('./Usuario');
const Turma = require('./Turma');

const TurmaUsuario = db.define(
  'TurmaUsuario',
  {
    cd_login_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Usuario,
        key: 'cd_login_usuario',
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
    tableName: 'turma_usuario',
  },
);

module.exports = TurmaUsuario;
