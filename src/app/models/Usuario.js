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
    nm_usuario: {
      type: DataTypes.STRING(45),
    },
    cd_senha_usuario: {
      type: DataTypes.STRING(45),
    },
  },
  {
    db,
    tableName: 'usuario',
    timestamps: false,
  },
);

module.exports = Usuario;
