window.onload = function () { //Inicia o código quando carrega a página;
    var objeto; // Declara uma variável que recebera um JSON com os dados do banco.
    $.post("ensin@ndo.aspx", null, function (jason) { //Realiza acesso ao ASP.NET, recebendo a variável jason, existente no C#.
        for (var i = 0; i < 5; i++) { //Inicia um for apenas para testes.
            objeto = JSON.parse(jason); //Converte uma string (Retorna do banco) para um JSON.
            var div = document.querySelectorAll(".materia"); //Pega uma div e guarda na variável.
            div.forEach(function(e){ //Para cada div encontrada, realiza o código abaixo.
                e.innerHTML = objeto.materia[i].nome; //Adiciona conteúdo na DIV.
            })


        }
    });
}