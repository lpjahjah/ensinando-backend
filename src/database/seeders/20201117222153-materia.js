module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('materia', [{
      cd_materia: 1,
      nm_materia: 'Regra de Três',
    },
    {
      cd_materia: 2,
      nm_materia: 'Trigonometria',
    },
    {
      cd_materia: 3,
      nm_materia: 'Expressões Númericas',
    },
    {
      cd_materia: 4,
      nm_materia: 'Vetores',
    },
    {
      cd_materia: 5,
      nm_materia: 'Ordem de Grandeza',
    },
    {
      cd_materia: 6,
      nm_materia: 'Movimento Uniforme',
    },
    {
      cd_materia: 7,
      nm_materia: 'Átomo e Sua Estrutura',
    },
    {
      cd_materia: 8,
      nm_materia: 'Estudo da Eletrosfera',
    },
    {
      cd_materia: 9,
      nm_materia: 'Tabela Periódica',
    },
    {
      cd_materia: 10,
      nm_materia: 'Bioquímica',
    },
    {
      cd_materia: 11,
      nm_materia: 'Citoplasma',
    },
    {
      cd_materia: 12,
      nm_materia: 'Introdução ao Estudo da Célula',
    },
    {
      cd_materia: 13,
      nm_materia: 'Pré-História',
    },
    {
      cd_materia: 14,
      nm_materia: 'Alta Idade Média - Império Bizantino',
    },
    {
      cd_materia: 15,
      nm_materia: 'Alta Idade Média - Reinos Bárbaros',
    },
    {
      cd_materia: 16,
      nm_materia: 'Conhecimento e Verdade na Filosofia Medieval',
    },
    {
      cd_materia: 17,
      nm_materia: 'Conhecimento e Verdade na Filosofia Moderna',
    },
    {
      cd_materia: 18,
      nm_materia: 'Conhecimento e Verdade na Filosofia Contemporânea',
    },
    {
      cd_materia: 19,
      nm_materia: 'Geosfera',
    },
    {
      cd_materia: 20,
      nm_materia: 'Políticas e Desafios Ambientais',
    },
    {
      cd_materia: 21,
      nm_materia: 'Migrações',
    },
    {
      cd_materia: 22,
      nm_materia: 'Introdução à Sociologia',
    },
    {
      cd_materia: 23,
      nm_materia: 'O que é o Homem?',
    },
    {
      cd_materia: 24,
      nm_materia: 'Natureza e Cultura',
    },
    {
      cd_materia: 25,
      nm_materia: 'Gêneros Literários',
    },
    {
      cd_materia: 26,
      nm_materia: 'Verbo: Tempos e Modos Verbais',
    },
    {
      cd_materia: 27,
      nm_materia: 'Recursos de Coesão Textual: Pronome',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('materia', null, {});
  },
};
