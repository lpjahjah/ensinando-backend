const Usuario = require('./Usuario');
const TipoUsuario = require('./TipoUsuario');
const Role = require('./Role');

// USUARIO HAS TIPOUSUARIO
Usuario.belongsToMany(TipoUsuario, { through: Role, unique: false, foreignKey: 'cd_login_usuario' });
TipoUsuario.belongsToMany(Usuario, { through: Role, unique: false, foreignKey: 'cd_tipo_usuario' });
Role.belongsTo(Usuario, { foreignKey: 'cd_login_usuario' });
Role.belongsTo(TipoUsuario, { foreignKey: 'cd_tipo_usuario' });

module.exports = {
  Usuario,
  TipoUsuario,
  Role,
};
