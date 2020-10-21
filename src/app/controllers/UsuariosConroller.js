const Usuario = require('../models/Usuario');

const ctrls = {

  async getUsuarios(_, res) {
    const size = await Usuario.count();

    const data = await Usuario.findAll();
    res.status(400).json([size, data]);
  },

};

module.exports = ctrls;
