const { MD5 } = require('crypto-js');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuario', [{
      cd_login_usuario: 32000,
      nm_usuario: 'admin',
      cd_senha_usuario: MD5(12341234).toString(),
    },
    {
      nm_usuario: 'Ana Carolina',
      cd_senha_usuario: MD5(123).toString(),
    },
    {
      nm_usuario: 'Henrique dos Santos',
      cd_senha_usuario: MD5(321).toString(),
    },
    {
      nm_usuario: 'Wagner Reis',
      cd_senha_usuario: MD5(444).toString(),
    },
    {
      nm_usuario: 'Marcelo Rodrigues',
      cd_senha_usuario: MD5(555).toString(),
    },
    {
      nm_usuario: 'Ian Gomes',
      cd_senha_usuario: MD5(777).toString(),
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('usuario', null, {});
  },
};
