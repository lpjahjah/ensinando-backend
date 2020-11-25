const usuario = require('./UsuariosController');
const roles = require('./RolesController');
const turma = require('./TurmasController');
const atividade = require('./AtividadesController');
const exercicio = require('./ExerciciosController');
const materia = require('./MateriasController');

module.exports = {
  usuario,
  roles,
  turma,
  atividade,
  exercicio,
  materia,
};
