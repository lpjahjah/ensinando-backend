module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tipo_usuario', [{
      cd_tipo_usuario: 1,
      nm_tipo_usuario: 'Administrador',
    },
    {
      cd_tipo_usuario: 2,
      nm_tipo_usuario: 'Aluno Tutor',
    },
    {
      cd_tipo_usuario: 3,
      nm_tipo_usuario: 'Aluno Aprendiz',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tipo_usuario', null, {});
  },
};
