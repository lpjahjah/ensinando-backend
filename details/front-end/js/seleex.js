const rm = window.location.search.substring(4);

//Requisição para pegar dados do usuario, materia, atividade e tipo_situacao.

$(".infousuario").append("<p>nm_usuario</p>");

$(".pagina").append("<h2>nm_materia</h2>");

for (let i = 0; i < 1; i++) 
{
    // switch (codigo_usuario) 
    // {
    //     case 1:
    //         $("#container").append("<div id='cd_atividade' class='exerciciocaixa'>" +
    //             "</br>" +
    //             "<p>nm_atividade</p>" +
    //             "<a href='respex.html?rm=" + rm + "&atividade=cd_atividade' id='cd_situacao'>nm_situacao</a></br>" +
    //             "<p>Data de entrega: dt_prazo hr_prazo</p>" +
    //             "</div>"
    //         );
    //         break;
    //     case 2:
    //         $("#container").append("<div id='cd_atividade' class='exerciciocaixa'>" +
    //             "</br>" +
    //             "<p>nm_atividade</p>" +
    //             "<a href='' id='cd_situacao'>nm_situacao</a></br>" +
    //             "<p>Data de entrega: dt_prazo hr_prazo</p>" +
    //             "</div>"
    //         );
    //         break;
    //     default:
    //         Alert("Sem atividades no presente momento!");
    //         break;
    // }

    $("#container").append("<div id='cd_atividade' class='exerciciocaixa'>" +
        "</br>" +
        "<p>nm_atividade</p>" +
        "<a href='respex.html?rm=" + rm + "&atividade=cd_atividade' id='cd_situacao'>nm_situacao</a></br>" +
        "<p>Data de entrega: dt_prazo hr_prazo</p>" +
        "</div>"
    );
}

