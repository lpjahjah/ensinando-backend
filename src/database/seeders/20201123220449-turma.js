module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('turma', [{
      cd_turma: 1,
      cd_materia: 1,
      nm_turma: 'Regra de Três',
      dt_criacao: Date.now(),
    },
    {
      cd_turma: 2,
      cd_materia: 2,
      nm_turma: 'Gêneros Literários',
      dt_criacao: Date.now(),
    },
    {
      cd_turma: 3,
      cd_materia: 3,
      nm_turma: 'Geosfera',
      dt_criacao: Date.now(),
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('turma', null, {});
  },
};
