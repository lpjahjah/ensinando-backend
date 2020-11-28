const {
  Turma, AtividadeTurma, Atividade, SituacaoPrazo, TurmaUsuario,
} = require('../models/index');

const ctrls = {
  
  async getTurmas(_, res){
    const data = await Turma.findAll();
    res.status(200).json(data);
  },
  
  async getAtividadesTurma(req, res) {
    const { id } = req.params;

    const data = await AtividadeTurma.findAll({
      where: {
        cd_turma: id,
      },
      attributes: [],
      include: {
        model: Atividade,
        attributes: [
          'nm_atividade',
          'hr_prazo',
          'dt_prazo',
          'cd_atividade',
        ],
        include: SituacaoPrazo,
      },
    });
    res.status(200).json(data);
  },

  async postTurma(req, res) {
    // eslint-disable-next-line camelcase
    const { cd_materia, nm_turma, usuarios } = req.body;

    const date = new Date();

    // eslint-disable-next-line camelcase
    const dt_criacao = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;

    const turma = {
      cd_materia,
      nm_turma,
      dt_criacao,
    };
    // eslint-disable-next-line camelcase
    const { cd_turma } = await Turma.create(turma);

    usuarios.forEach(async (cd) => {
      await TurmaUsuario.create({
        cd_login_usuario: cd,
        cd_turma,
      });
    });

    res.status(201).json(cd_turma);
  },

};

module.exports = ctrls;
