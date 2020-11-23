module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('atividade_turma', [{
      cd_atividade: 1,
      cd_turma: 1,
    },
    {
      cd_atividade: 2,
      cd_turma: 2,
    },
    {
      cd_atividade: 3,
      cd_turma: 3,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('atividade_turma', null, {});
  },
};
