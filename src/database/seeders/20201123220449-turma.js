module.exports = {
  up: async (queryInterface) => {
    const date = new Date();
    const curDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;

    await queryInterface.bulkInsert('turma', [{
      cd_turma: 1,
      cd_materia: 1,
      nm_turma: 'Regra de Três',
      dt_criacao: curDate,
    },
    {
      cd_turma: 2,
      cd_materia: 2,
      nm_turma: 'Gêneros Literários',
      dt_criacao: curDate,
    },
    {
      cd_turma: 3,
      cd_materia: 3,
      nm_turma: 'Geosfera',
      dt_criacao: curDate,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('turma', null, {});
  },
};
