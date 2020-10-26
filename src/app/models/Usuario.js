const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Usuario = db.define(
  'Usuario',
  {
    cd_login_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nm_usuario: DataTypes.STRING,
    cd_senha_usuario: DataTypes.STRING,
  },
  {
    db,
    tableName: 'usuario',
  },
);

module.exports = Usuario;
