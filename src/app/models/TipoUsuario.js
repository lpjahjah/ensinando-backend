const { DataTypes } = require('sequelize');
const db = require('../../database/index');

const TipoUsuario = db.define(
  'TipoUsuario',
  {
    cd_tipo_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nm_tipo_usuario: DataTypes.STRING,
  },
  {
    db,
    tableName: 'tipo_usuario',
  },
);

module.exports = TipoUsuario;
