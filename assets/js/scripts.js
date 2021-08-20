


let Nome = window.document.getElementById("Nome")

let email = document.querySelector("#email")

let assunto = document.querySelector("#Assunto")

let mapa = document.querySelector("#mapa")


let Nomeok = false
let emailok = false
let assuntook = false

Nome.style.width = '100%'

email.style.width = "100%"

assunto.style.width = '100%'

function valida() {

    let text = document.querySelector("#text")
    if (Nome.value.length >= 30) {
        text.innerHTML = "Nome Invalido"
        text.style.color = "red"


    }
    else {
        text.innerHTML = "Nome Valido"
        text.style.color = "green"
        Nomeok = true
    }
}

function validaAssunto() {

    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length == 10) {

        txtAssunto.innerHTML = "Limite max:10 caracteres"

        txtAssunto.style.color = "red"

    }
    else {
        txtAssunto.innerHTML = " "
        assuntook = true
    }
}


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
        emailok = true
    }
}

function enviar (){
    if (Nomeok == true && emailok == true && assuntook == true){
        alert("Formulario enviado com sucesso!")
    }
    else {
        alert("Preencha o formulario corretamente antes de enviar!")
    }
}

function mapaZoom(){
mapa.style.width = "800px"
mapa.style.height = "500px"


}

function mapaNormal(){
    
    mapa.style.width = "400px"
    mapa.style.height = "300px"

}




