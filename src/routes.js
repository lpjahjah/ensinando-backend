const { Router } = require('express');
const controllers = require('./app/controllers/index');

const routes = new Router();

// USER ROUTES
routes.get('/usuarios', controllers.usuario.getUsuarios);

module.exports = routes;
