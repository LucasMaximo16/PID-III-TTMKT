import App from "./App"

const sobrenome = document.getElementById("sobrenome")
const cargo = document.getElementById("cargo")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")

window.onload=function Corrigir(){
    const form = document.getElementById("form")
    console.log("passei aqui")
    form.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("cheguei aqui")
        checkInputs();
    })
    
}

function checkInputs(){
    const nome = document.getElementById('nome')
    const nomeValue = nome.value
    //const emailValue = email.value
    //const sobrenomeValue = sobrenome.value
    //const cargoValue = cargo.value
    //const telefoneValue = telefone.value

    console.log("opa")
    console.log(nomeValue);

    if(nomeValue == ''){
       return setErrorFor(nome, "O nome de usuário é obrigatório")
    }else{
        return setSuccessFor(nome)
    }
}

function setErrorFor(input,mensagem){
    console.log("passou")
    console.log(input.parentElement)
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar a mensagem de erro
    small.innerText = mensagem

    //Adciona classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = 'form-control success'
}

export default checkInputs