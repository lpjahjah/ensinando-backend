const { TipoUsuario, Role } = require('../models/index');

const ctrls = {
  async getRoles(_, res) {
    const data = await TipoUsuario.findAll();
    res.status(400).json(data);
  },

  async getUsuarioRoles(req, res) {
    const { id } = req.params;

    const data = await Role.findAll({
      attributes: [],
      where: { cd_login_usuario: id },
      include:
        {
          model: TipoUsuario,
          attributes: ['nm_tipo_usuario'],
        },
    });
    res.status(400).json(data);
  },
};

module.exports = ctrls;
