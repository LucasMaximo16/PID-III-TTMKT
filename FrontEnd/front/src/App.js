import logo from './logo.svg';
import './App.css';
import Cadastro from '../src/Cadastro'
import Tabela from './Tabela';
import Header from '../src/Header/Header'
import Nav from '../src/Nav/Nav'
import { useEffect, useState } from 'react';
import checkInputs from './script'

function App() {

  // Objeto Funcionario
  const funcionarios = {
    nome: '',
    sobrenome: '',
    cpf: '',
    cargo: '',
    email: '',
    telefone: '',

  }

  //UseState

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [funcionario, setFuncionario] = useState([]);
  const [objFuncionario, setObjFuncionario] = useState(funcionarios)

  //UseEffect - HOOK QUE É EXECUTADO QUANDO O COMPONENTE É MONTADO (FORMULARIO E TABELA), FAZENDO A REQUISIÇÃO COM O BACKENED ENVIANDO PARA O USESTATE
  useEffect(() => {
    fetch('http://localhost:8080/funcionario')
      .then(retorno => retorno.json())
      .then(retorno_convertido => setFuncionario(retorno_convertido))
  }, [])

  //RECEBER DADOS DO FORMULARIO
  const Digitar = (e) => {
    setObjFuncionario({ ...objFuncionario, [e.target.name]: e.target.value })
  }

  //CADASTRANDO PRODUTO
  const cadastrar = () => {

    checkInputs()
    fetch('http://localhost:8080/funcionario', {
      method: "post",
      body: JSON.stringify(objFuncionario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json)
      .then(retorno_convertido => {

        console.log(retorno_convertido)
        if (retorno_convertido.message !== undefined) {
          alert("não foi possivel efetuar o cadastro, favor verifique os campos preenchidos")
        } else {
          setFuncionario([...funcionario, retorno_convertido])
          LimparFormulario();
          alert('Cadastro de Funcionario Efetuado com Sucesso')
        }
      })
  }

  //LIMPAR FUNCIONARIO
  const LimparFormulario = () => {
    setObjFuncionario(funcionarios)
    setBtnCadastrar(true)
  }

  //SELECIONAR PRODUTO
  const selecionarProduto = (indice) => {
    setObjFuncionario(funcionario[indice]);
    setBtnCadastrar(false);
  }
  //REMOVENDO PRODUTO
  const remover = () => {
    fetch('http://localhost:8080/funcionario/deletar/' + objFuncionario.id, {
      method: "delete",
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json)
      .then(retorno_convertido => {

        //mensagem
        alert("Removido com sucesso");

        //Copiando Vetor de Funcionario
        let vetorTemp = [...funcionario];
        console.log(objFuncionario.id)
        let indice = vetorTemp.findIndex((f) => {
          console.log(f)
          return f.id === objFuncionario.id;
        });
        console.log(indice)

        //Removendo produto do vetor temporario
        vetorTemp.splice(indice, 1);

        //Atualizando vetor de funcionarios
        setFuncionario(vetorTemp);
        LimparFormulario();

      })
  }

  //ALTERAR PRODUTO
  const alterar = () => {
    fetch('http://localhost:8080/funcionario/alterar/', {
      method: "put",
      body: JSON.stringify(objFuncionario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json)
      .then(retorno_convertido => {


        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem)
        } else {
          alert('Alteração de Funcionario Efetuada com Sucesso')

          //Copiando Vetor de Funcionario
          let vetorTemp = [...funcionario];
          let indice = vetorTemp.findIndex((f) => {
            console.log(f);
            return f.id === objFuncionario.id;
          });

          //Alterar produto do vetor temporario
          vetorTemp[indice] = objFuncionario

          //Atualizando vetor de funcionarios
          setFuncionario(vetorTemp);
          LimparFormulario()
        }
      })
  }
  //RETORNO
  return (
    <div>
      <Cadastro botao={btnCadastrar} eventoTeclado={Digitar} cadastrar={cadastrar} obj={objFuncionario} cancelar={LimparFormulario} remover={remover} alterar={alterar} />
      <Tabela vetor={funcionario} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
