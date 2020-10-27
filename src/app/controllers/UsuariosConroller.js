const { MD5 } = require('crypto-js');
const { Usuario, TipoUsuario } = require('../models/index');

const ctrls = {

  async getUsuarios(_, res) {
    const size = await Usuario.count();

    const data = await Usuario.findAll({
      include: {
        model: TipoUsuario,
        attributes: ['nm_tipo_usuario'],
      },
    });
    res.status(200).json([size, data]);
  },

  async getUsuario(req, res) {
    const { id } = req.params;
    const user = await Usuario.findByPk(id);

    res.status(200).json(user);
  },

  async authenticateUsuario(req, res) {
    req.body.cd_senha_usuario = MD5(req.body.cd_senha_usuario).toString();
    // eslint-disable-next-line camelcase
    const { cd_login_usuario, cd_senha_usuario } = req.body;

    const data = await Usuario.findOne({
      where: {
        cd_login_usuario,
        cd_senha_usuario,
      },
      include: {
        model: TipoUsuario,
      },
    });

    res.status(200).json(data);
  },

  async postUsuario(req, res) {
    req.body.cd_senha_usuario = MD5(req.body.cd_senha_usuario).toString();
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  },

  async putUsuario(req, res) {
    const { id } = req.params;

    req.body.cd_senha_usuario = MD5(req.body.cd_senha_usuario).toString();
    const persisted = await Usuario.findByPk(id);
    persisted.update(req.body);
    res.status(200).json(persisted);
  },

};

module.exports = ctrls;
