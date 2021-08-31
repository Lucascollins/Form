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
        forma.username.focus;
        return false;

    } else if (emailDados === '') {
        forma.email.focus;
        return false;

    } else if (passwordDados === '') {
        forma.password.focus;
        return false;
    } else {
        alert('Parabéns!,confirme seu email');
    }
}