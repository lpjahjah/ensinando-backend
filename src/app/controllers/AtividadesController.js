const {
  Exercicio, QuestaoAlternativa,
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

};

module.exports = ctrl;
