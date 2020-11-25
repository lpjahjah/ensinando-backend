const { Exercicio } = require('../models/index');

const ctrls = {
  async postExercicio(req, res) {
    const { body } = req;

    if (Array.isArray(body)) {
      body.forEach(async (item) => [
        await Exercicio.create(item),
      ]);
    } else {
      await Exercicio.create(body);
    }
    res.sendStatus(201);
  },
};

module.exports = ctrls;
