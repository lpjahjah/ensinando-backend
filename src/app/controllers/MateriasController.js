const { Materia } = require('../models');

const ctrls = {
  async getMaterias(_, res) {
    const data = await Materia.findAll();
    res.status(200).json(data);
  },
};

module.exports = ctrls;
