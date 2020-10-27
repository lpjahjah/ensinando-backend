const {
  AtividadeTurma, Atividade, SituacaoPrazo,
} = require('../models/index');

const ctrls = {
  async getAtividadeTurma(req, res) {
    const { idAtividade } = req.params;

    const data = await AtividadeTurma.findAll({
      where: {
        cd_atividade: idAtividade,
      },
      include: {
        model: Atividade,
        include: SituacaoPrazo,
      },
    });
    res.status(200).json(data);
  },
};

module.exports = ctrls;
