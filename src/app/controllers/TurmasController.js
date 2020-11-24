const {
  AtividadeTurma, Atividade, SituacaoPrazo,
} = require('../models/index');

const ctrls = {
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
};

module.exports = ctrls;
