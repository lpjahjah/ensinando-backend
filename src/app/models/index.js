const Usuario = require('./Usuario');
const TipoUsuario = require('./TipoUsuario');
const Role = require('./Role');
const Materia = require('./Materia');
const Turma = require('./Turma');
const TurmaUsuario = require('./TurmaUsuario');
const Aula = require('./Aula');
const SituacaoPrazo = require('./SituacaoPrazo');
const Atividade = require('./Atividade');
const AtividadeTurma = require('./AtividadeTurma');
const Exercicio = require('./Exercicio');
const QuestaoAlternativa = require('./QuestaoAlternativa');
const RespostaUsuario = require('./RespostaUsuario');

// USUARIO HAS TIPOUSUARIO
Usuario.belongsToMany(TipoUsuario, { through: Role, unique: false, foreignKey: 'cd_login_usuario' });
TipoUsuario.belongsToMany(Usuario, { through: Role, unique: false, foreignKey: 'cd_tipo_usuario' });
Role.belongsTo(Usuario, { foreignKey: 'cd_login_usuario' });
Role.belongsTo(TipoUsuario, { foreignKey: 'cd_tipo_usuario' });

// USUARIO HAS TURMA
Usuario.belongsToMany(Turma, { through: TurmaUsuario, unique: false, foreignKey: 'cd_login_usuario' });
Turma.belongsToMany(Usuario, { through: TurmaUsuario, unique: false, foreignKey: 'cd_turma' });

module.exports = {
  Usuario,
  TipoUsuario,
  Role,
  Materia,
  Turma,
  TurmaUsuario,
  Aula,
  SituacaoPrazo,
  Atividade,
  AtividadeTurma,
  Exercicio,
  QuestaoAlternativa,
  RespostaUsuario,
};
