const { Router } = require('express');
const controllers = require('./app/controllers');

const routes = new Router();

// USER ROUTES
routes.post('/authenticate', controllers.usuario.authenticateUsuario);
routes.get('/usuarios', controllers.usuario.getUsuarios);
routes.get('/usuarios/:id', controllers.usuario.getUsuario);
routes.post('/usuarios', controllers.usuario.postUsuario);
routes.put('/usuarios/:id', controllers.usuario.putUsuario);
routes.get('/usuarios/turmas/:id', controllers.usuario.getTurmasUsuario);
routes.post('/usuarios/resposta', controllers.usuario.postRespostaUsuario);

// ROLES ROUTES
routes.get('/roles', controllers.roles.getRoles);
routes.get('/roles/:id', controllers.roles.getUsuarioRoles);

// TURMAS ROUTES
routes.get('/turmas/atividades/:id', controllers.turma.getAtividadesTurma);
routes.post('/turmas', controllers.turma.postTurma);

// ATIVIDADES ROUTES
routes.post('/atividades', controllers.atividade.postAtividade);
routes.get('/atividades/exercicios/:id', controllers.atividade.getExerciciosAtividade);

// EXERCICIOS ROUTES
routes.post('/exercicios', controllers.exercicio.postExercicio);

// MATERIAS ROUTES
routes.get('/materias', controllers.materia.getMaterias);

module.exports = routes;
