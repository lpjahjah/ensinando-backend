const {
  Usuario, TipoUsuario, Turma, TurmaUsuario, Materia, RespostaUsuario,
} = require('../models/index');

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
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  },

  async putUsuario(req, res) {
    const { id } = req.params;

    const persisted = await Usuario.findByPk(id);
    persisted.update(req.body);
    res.status(200).json(persisted);
  },

  async getTurmasUsuario(req, res) {
    const { id } = req.params;

    const data = await TurmaUsuario.findAll({
      where: {
        cd_login_usuario: id,
      },
      attributes: [],
      include: {
        model: Turma,
        include: Materia,
      },
    });
    res.status(200).json(data);
  },

  async postRespostaUsuario(req, res) {
    const { body } = req;

    const data = await RespostaUsuario.create(body);

    res.status(200).json(data);
  },

};

module.exports = ctrls;
