module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('resposta_usuario', [{
      cd_login_usuario: 32002,
      cd_exercicio: 4,
      txt_resposta_usuario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('resposta_usuario', null, {});
  },
};
