module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuario_tipo_usuario', [{
      cd_login_usuario: 32001,
      cd_tipo_usuario: 1,
    },
    {
      cd_login_usuario: 32002,
      cd_tipo_usuario: 2,
    },
    {
      cd_login_usuario: 32002,
      cd_tipo_usuario: 3,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('usuario_tipo_usuario', null, {});
  },
};
