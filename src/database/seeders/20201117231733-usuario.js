const { MD5 } = require('crypto-js');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuario', [{
      cd_login_usuario: 32000,
      nm_usuario: 'admin',
      cd_senha_usuario: MD5(12341234).toString(),
    },
    {
      cd_login_usuario: 32001,
      nm_usuario: 'Ana Carolina',
      cd_senha_usuario: MD5(123).toString(),
    },
    {
      cd_login_usuario: 32002,
      nm_usuario: 'Henrique dos Santos',
      cd_senha_usuario: MD5(321).toString(),
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('usuario', null, {});
  },
};
