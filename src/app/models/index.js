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
Usuario.belongsToMany(Turma, { through: TurmaUsuario, foreignKey: 'cd_login_usuario' });
Turma.belongsToMany(Usuario, { through: TurmaUsuario, foreignKey: 'cd_turma' });
TurmaUsuario.belongsTo(Turma, { foreignKey: 'cd_turma' });
TurmaUsuario.belongsTo(Usuario, { foreignKey: 'cd_login_usuario' });

// TURMA ONE TO MANY AULA
Turma.hasMany(Aula, { foreignKey: 'cd_turma' });
Aula.belongsTo(Turma, { foreignKey: 'cd_turma' });

// TURMA HAS ATIVIDADE
Turma.belongsToMany(Atividade, { through: AtividadeTurma, foreignKey: 'cd_turma' });
Atividade.belongsToMany(Turma, { through: AtividadeTurma, foreignKey: 'cd_atividade' });
AtividadeTurma.belongsTo(Atividade, { foreignKey: 'cd_atividade' });
AtividadeTurma.belongsTo(Turma, { foreignKey: 'cd_turma' });

// MATERIA ONE TO MANY TURMA
Materia.hasMany(Turma, { foreignKey: 'cd_materia' });
Turma.belongsTo(Materia, { foreignKey: 'cd_materia' });

// SITUACAO_PRAZO ONE TO MANY ATIVIDADE
SituacaoPrazo.hasMany(Atividade, { foreignKey: 'cd_situacao' });
Atividade.belongsTo(SituacaoPrazo, { foreignKey: 'cd_situacao' });

// ATIVIDADE ONE TO MANY EXERCICIO
Atividade.hasMany(Exercicio, { foreignKey: 'cd_atividade' });
Exercicio.belongsTo(Atividade, { foreignKey: 'cd_atividade' });

// EXERCICIO ONE TO MANY RESPOSTA USUARIO
Exercicio.hasMany(RespostaUsuario, { foreignKey: 'cd_exercicio' });
RespostaUsuario.belongsTo(Exercicio, { foreignKey: 'cd_exercicio' });

// EXERCICIO ONE TO MANY QUESTAO_ALTERNATIVA
Exercicio.hasMany(QuestaoAlternativa, { foreignKey: 'cd_exercicio' });
QuestaoAlternativa.belongsTo(Exercicio, { foreignKey: 'cd_exercicio' });

// QUESTAO_ALTERNATIVA ONE TO MANY RESPOSTA_USUARIO
QuestaoAlternativa.hasMany(RespostaUsuario, { foreignKey: 'cd_alternativa' });
RespostaUsuario.belongsTo(QuestaoAlternativa, { foreignKey: 'cd_alternativa' });

// USUARIO ONE TO MANY RESPOSTA_USUARIO
Usuario.hasMany(RespostaUsuario, { foreignKey: 'cd_login_usuario' });
RespostaUsuario.belongsTo(Usuario, { foreignKey: 'cd_login_usuario' });

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
