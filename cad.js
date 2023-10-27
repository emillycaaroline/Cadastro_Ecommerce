//consultar cep
const pesquisarCep = async() =>{
    limparFormulario()
    const url = `https://viacep.com.br/ws/${CEP.value}/json/`;
    if(cepValido(CEP.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
        alert('CEP não encontrado')
        }else{
            preencherformulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}

document.getElementById('CEP').addEventListener('focusout', pesquisarCep);

const limparFormulario = () =>{
    document.getElementById('ENDERECO').value = '';
    document.getElementById('CIDADE').value = '';
    document.getElementById('ESTADO').value = '';
    document.getElementById('BAIRRO').value = '';

}

//VERIFICAR CEP 
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (CEP) => CEP.length == 8 && eNumero(CEP);

//PREENCHE FORMULARIO
const preencherformulario = (endereco) =>{
    document.getElementById('ENDERECO').value = endereco.logradouro;
    document.getElementById('BAIRRO').value = endereco.bairro;
    document.getElementById('CIDADE').value = endereco.localidade;
    document.getElementById('ESTADO').value = endereco.uf;
}




function Verificar(){

    let nome = document.getElementById('NOME').value;
    let cpf = document.getElementById('CPF').value;
    let data = document.getElementById('NASCIMENTO').value;
    let email = document.getElementById('EMAIL').value;
    let senha = document.getElementById('SENHA').value;
    let confsenha = document.getElementById('CONFSENHA').value;
    let cep = document.getElementById('CEP');
    let endereco = document.getElementById('ENDERECO').value;
    let number = document.getElementById('NUMERO').value;
    let complemento = document.getElementById('COMPLEMENTO');
    let bairro = document.getElementById('BAIRRO').value;
    let cidade = document.getElementById('CIDADE');
    let estado = document.getElementById('ESTADO');
   
     if(!nome || !telefone)
     alert("Campos de preenchimento obrigatório. Favor preencher.")

     if(!senha || !endereco)
     alert("Campos de preenchimento obrigatório. Favor preencher.")

     if(!cpf || !data)
     alert("Campos de preenchimento obrigatório. Favor preencher.")

     if(!telefone || !nome)
     alert("Campos de preenchimento obrigatório. Favor preencher.")

     if(!number || !bairro)
     alert("Campo de preenchimento obrigatório. favor preencher")

     if(!email || !confsenha)
     alert("campo de preenchimento obrigaório. favor preencher")

     if(!cep || !complemento)
     alert("campo de preenchimento obrigaório. favor preencher")

     if(!cidade || !estado)
     alert("campo de preenchimento obrigaório. favor preencher")

    }


    function validarSenha() {
        senha = document.getElementsByName('SENHA').value;
        confsenha = document.getElementsByName('CONFSENHA').value;
      
        if (senha != confsenha) {
          confsenha.setCustomValidity("Senhas diferentes!");
          return false;
        } else {
          return true;
        }
      }

   