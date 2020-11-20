module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('exercicio', [{
      cd_exercicio: 1,
      cd_atividade: 1,
      ic_dissertativo: false,
      txt_exercicio: 'A rua Tenório Quadros e a avenida Teófilo Silva, ambas retilíneas,  cruzam-se conforme um ângulo de 30º. O posto de gasolina Estrela do Sul  encontra-se na avenida Teófilo Silva a 4 000 m do citado cruzamento. Sabendo que o percurso do posto Estrela do Sul até a rua tenório quadros forma um ângulo de 90° no ponto de encontro do posto com a rua Teófilo Silva, determine em quilômetros, a distância entre o posto de gasolina Estrela do Sul e a rua Tenório Quadros?',
    },
    {
      cd_exercicio: 2,
      cd_atividade: 2,
      ic_dissertativo: true,
      txt_exercicio: 'O que foi o Barroco? Em qual período histórico teve a sua maior influência? O barroco ainda tem influências nos dias atuais? Justifique sua resposta e cite exemplos.',
    },
    {
      cd_exercicio: 3,
      cd_atividade: 1,
      ic_dissertativo: true,
      txt_exercicio: 'Diferencie cidade e município descrevendo os seus respectivos conceitos.',
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('exercicio', null, {});
  },
};
