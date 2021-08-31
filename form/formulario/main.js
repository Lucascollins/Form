//Entrada de dados
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");

//Confirmação de dados
var submit = document.querySelector("#submit");
submit.addEventListener('click', verificarDados);
var validacao = document.querySelector('.validacao');
//Fuction
function verificarDados() {
    var userDados = username.value;
    var emailDados = email.value;
    var passwordDados = password.value;

    if (userDados === '') {
        return false;

    } else if (emailDados === '') {
        return false;

    } else if (passwordDados === '') {
        return false;
    } else {
        alert('Parabéns!,confirme seu email');
    }
}
