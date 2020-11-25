module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('materia', [{
      cd_materia: 1,
      nm_materia: 'Matemática ',
    },
    {
      cd_materia: 2,
      nm_materia: 'Português',
    },
    {
      cd_materia: 3,
      nm_materia: 'Geografia',
    },
    {
      cd_materia: 4,
      nm_materia: 'História',
    },
    {
      cd_materia: 5,
      nm_materia: 'Filosofia',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('materia', null, {});
  },
};
