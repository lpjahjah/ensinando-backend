const rm = window.location.search.substring(4,9);
const cd_atividade = window.location.search.substring(20);

$(".infousuario").append("<p>nm_usuario</p>");

$(".pagina").append("<h2>nm_atividade</h2>");

//Requisição para pegar dados do usuario, atividade e exercicio.

// if(cd_alternativa == null) 
// {
//     $("#container").append("<div id='cd_exercicio'>"+
//         "<h1>txt_exercicio</h1>"+
//     "</div>"+
//     "<textarea class='resposta' resize='none' placeholder='aqui ira a resposta do aluno'></textarea><br />"
//     );
// }
// else
// {
//     $("#container").append("<div id='cd_exercicio' class='exercicio2'>" +
//         "<h1>txt_exercicio</h1>" +
//         "</div>" +
//         "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>nr_alternativa + txt_alternativa" +
//         "<br />" +
//         "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>nr_alternativa + txt_alternativa" +
//         "<br />" +
//         "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>nr_alternativa + txt_alternativa" +
//         "<br />" +
//         "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>"
//     );
// }

$("#container").append("<div id='cd_exercicio'>" +
    "<h1>txt_exercicio</h1>" +
    "</div>" +
    "<textarea class='resposta' resize='none' placeholder='aqui ira a resposta do aluno'></textarea><br />"
);

$("#container").append("<div id='cd_exercicio' class='exercicio2'>" +
    "<h1>txt_exercicio</h1>" +
    "</div>" +
    "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>nr_alternativa + txt_alternativa" +
    "<br />" +
    "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>nr_alternativa + txt_alternativa" +
    "<br />" +
    "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>nr_alternativa + txt_alternativa" +
    "<br />" +
    "<input type='radio' name='webmaster' class='alternativa' value='cd_alternativa'/>nr_alternativa + txt_alternativa"
);

$("#container").append("<button id='button'>Enviar</button>");
