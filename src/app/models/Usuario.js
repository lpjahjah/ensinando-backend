const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const Usuario = db.define(
  'Usuario',
  {
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
