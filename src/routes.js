const { Router } = require('express');
const controllers = require('./app/controllers/index');

const routes = new Router();

// USER ROUTES
routes.get('/authenticate', controllers.usuario.authenticateUsuario);
routes.get('/usuarios', controllers.usuario.getUsuarios);
routes.get('/usuarios/:id', controllers.usuario.getUsuario);
routes.post('/usuarios', controllers.usuario.postUsuario);
routes.put('/usuarios/:id', controllers.usuario.putUsuario);

// ROLES ROUTES
routes.get('/roles', controllers.roles.getRoles);
routes.get('/roles/:id', controllers.roles.getUsuarioRoles);

module.exports = routes;
