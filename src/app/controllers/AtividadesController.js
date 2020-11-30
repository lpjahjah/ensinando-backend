const {
  Atividade, Exercicio, QuestaoAlternativa, AtividadeTurma
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
    const { body } = req;
    body.cd_situacao = 1;
    const data = await Atividade.create(body);
    await AtividadeTurma.create({ cd_atividade: data.cd_atividade, cd_turma: body.cd_turma });
    res.status(201).json(data.cd_atividade);
  },

};

module.exports = ctrl;
