const { Exercicio, QuestaoAlternativa } = require('../models');

const storeExercicio = async (item) => {
  // eslint-disable-next-line camelcase
  const { cd_exercicio } = await Exercicio.create(item);

  if (item.alternativas) {
    item.alternativas.forEach(async (alt) => {
      await QuestaoAlternativa.create({
        txt_alternativa: alt.txt_alternativa,
        ic_alternativa_correta: alt.ic_alternativa_correta,
        cd_exercicio,
      });
    });
  }
};

const ctrls = {
  async postExercicio(req, res) {
    const { body } = req;

    if (Array.isArray(body)) {
      body.forEach((item) => {
        storeExercicio(item);
      });
    } else {
      storeExercicio(body);
    }
    res.sendStatus(201);
  },
};

module.exports = ctrls;
