module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuario', [{
      cd_login_usuario: 32000,
      nm_usuario: 'admin',
      cd_senha_usuario: '12341234',
    },
    {
      cd_login_usuario: 32001,
      nm_usuario: 'Ana Carolina',
      cd_senha_usuario: '123',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('usuario', null, {});
  },
};
