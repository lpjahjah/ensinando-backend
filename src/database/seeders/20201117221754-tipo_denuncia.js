module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tipo_denuncia', [{
      cd_tipo_denuncia: 1,
      nm_tipo_denuncia: 'Ofensa',
    },
    {
      cd_tipo_denuncia: 2,
      nm_tipo_denuncia: 'Spam',
    },
    {
      cd_tipo_denuncia: 3,
      nm_tipo_denuncia: 'Discurso de ódio',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tipo_denuncia', null, {});
  },
};
