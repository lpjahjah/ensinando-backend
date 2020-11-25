const {
  Atividade, Exercicio, QuestaoAlternativa,
} = require('../models/index');

const ctrl = {
  async getExerciciosAtividade(req, res) {
    const { id } = req.params;

    const data = await Exercicio.findAll({
      where: {
        cd_atividade: id,
      },
      include: QuestaoAlternativa,
    });
    res.status(200).json(data);
  },

  async postAtividade(req, res) {
    // eslint-disable-next-line camelcase
    const { body } = req;
    body.cd_situacao = 1;
    const data = await Atividade.create(body);
    res.status(201).json(data.cd_atividade);
  },

};

module.exports = ctrl;
