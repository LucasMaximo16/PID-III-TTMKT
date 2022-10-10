const form = document.getElementById("form")
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const cargo = document.getElementById("cargo")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")

form.addEventListener("button", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const nomeValue = nome.nome
    const emailValue = email.nome
    const sobrenomeValue = sobrenome.nome
    const cargoValue = cargo.nome
    const telefoneValue = telefone.nome

    if(nomeValue == null){
        setErrorFor(nome, "O nome de usuário é obrigatório")
    }
}

function setErrorFor(input,mensagem){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar a mensagem de erro
    small.innerText = mensagem

    //Adciona classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input, menssge){
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = 'form-control success'
}