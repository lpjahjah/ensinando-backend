const {
  TurmaUsuario, Turma, Materia,
} = require('../models/index');

const ctrls = {
  async getTurmaUsuario(req, res) {
    const { usuarioid } = req.params;

    const data = await TurmaUsuario.findAll({
      where: {
        cd_login_usuario: usuarioid,
      },
      include: {
        model: Turma,
        include: Materia,
      },
    });
    res.status(200).json(data);
  },
  async getTurmasUsuario(req, res) {
    const { usuarioid, turmaId } = req.params;

    const data = await TurmaUsuario.findAll({
      where: {
        cd_login_usuario: usuarioid,
        cd_turma: turmaId
        ,
      },
      include: {
        model: Turma,
        include: Materia,
      },
    });
    res.status(200).json(data);
  },
};

module.exports = ctrls;
