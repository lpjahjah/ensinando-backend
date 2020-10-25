$("#BotaoL").click(function()
{
    const rm = $("#RML").val();
    const senha = $("#SenhaL").val();
    // let codigo_usuario;

    if(rm == "" || senha == "") alert("Digite RM e/ou SENHA!");
    else
    {
        //Requisição para pegar dados do tipo_usuario

        if(senha == "aluno") window.location.href = "seleex.html?rm="+ rm;
        if(senha == "tutor") window.location.href = "criaex.html?rm="+ rm;

        // switch (codigo_usuario) 
        // {
        //     case 2:
        //         window.location.href = "seleex.html?rm="+ rm; 
        //         break;
        //     case 3:
        //         window.location.href = "criaex.html?rm="+ rm; 
        //         break;
        //     default:
        //         alert("Erro de login!");
        //         break; 
        // }
    }
});