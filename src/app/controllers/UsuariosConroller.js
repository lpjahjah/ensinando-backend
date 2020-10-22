const Usuario = require('../models/Usuario');

const ctrls = {

  async getUsuarios(_, res) {
    const size = await Usuario.count();

    const data = await Usuario.findAll();
    res.status(400).json([size, data]);
  },

  async getUsuario(req, res) {
    const { id } = req.params;
    const user = await Usuario.findByPk(id);

    if (user == null) {
      res.status(404).json({ error: 'user not found' });
    }

    res.status(400).json(user);
  },

};

module.exports = ctrls;
