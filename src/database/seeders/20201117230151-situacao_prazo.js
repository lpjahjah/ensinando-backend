module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('situacao_prazo', [{
      cd_situacao: 1,
      nm_situacao: 'Em aberto',
    },
    {
      cd_situacao: 2,
      nm_situacao: 'Expirado',
    },
    {
      cd_situacao: 3,
      nm_situacao: 'Concluido',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('situacao_prazo', null, {});
  },
};
