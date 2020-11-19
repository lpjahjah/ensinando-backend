module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('atividade', [{
      cd_atividade: 1,
      nm_atividade: 'Atividade de Trigonometria',
      cd_situacao: 1,
      dt_prazo: '2021-08-21',
      hr_prazo: '12:00:00',
    },
    {
      cd_atividade: 2,
      nm_atividade: 'Atividade Barroco e Aspectos Socias',
      cd_situacao: 2,
      dt_prazo: '2020-08-23',
      hr_prazo: '12:00:00',
    },
    {
      cd_atividade: 3,
      nm_atividade: 'Atividade de Urbanização e Globalização',
      cd_situacao: 3,
      dt_prazo: '2020-08-23',
      hr_prazo: '12:00:00',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('atividade', null, {});
  },
};
