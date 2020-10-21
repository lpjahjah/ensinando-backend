document.querySelector("#form").addEventListener("submit",e=>{
e.preventDefault();
var RM = document.querySelector("#RML").value;
var Senha = document.querySelector("#SenhaL").value;

$.post("login.aspx", {R: RM, S: Senha}, function (sim) { 
        if(sim == "true"){
            window.location.href = "ensin@ndo.html";
        } else{
            alert("Login inválido");
        }
    });
});