const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Usuario = require('./Usuario');
const TipoUsuario = require('./TipoUsuario');

const Role = db.define(
  'Role', {
    cd_login_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Usuario,
        key: 'cd_login_usuario',
      },
    },
    cd_tipo_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: TipoUsuario,
        key: 'cd_tipo_usuario',
      },
    },
  },
  {
    db,
    tableName: 'usuario_tipo_usuario',
  },
);

module.exports = Role;
