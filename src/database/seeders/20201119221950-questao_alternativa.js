module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('questao_alternativa', [{
      cd_alternativa: 1,
      txt_alternativa: '2000 metros',
      ic_alternativa_correta: true,
      cd_exercicio: 1,
    },
    {
      cd_alternativa: 2,
      txt_alternativa: '300 metros',
      ic_alternativa_correta: false,
      cd_exercicio: 1,
    },
    {
      cd_alternativa: 3,
      txt_alternativa: '1km',
      ic_alternativa_correta: false,
      cd_exercicio: 1,
    },
    {
      cd_alternativa: 4,
      txt_alternativa: '6km',
      ic_alternativa_correta: false,
      cd_exercicio: 1,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('questao_alternativa', null, {});
  },
};
