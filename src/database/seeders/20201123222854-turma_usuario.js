module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('turma_usuario', [{
      cd_login_usuario: 32001,
      cd_turma: 1,
    },
    {
      cd_login_usuario: 32001,
      cd_turma: 2,
    },
    {
      cd_login_usuario: 32001,
      cd_turma: 3,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('turma_usuario', null, {});
  },
};
