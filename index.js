function limparForm()
{
  document.getElementById("rua").value="";
  document.getElementById("complemento").value="";
  document.getElementById("bairro").value="";
  document.getElementById("cidade").value="";
  document.getElementById("estado").value="";
}

function loading()
{
  document.getElementById("rua").value="...";
  document.getElementById("complemento").value="...";
  document.getElementById("bairro").value="...";
  document.getElementById("cidade").value="...";
  document.getElementById("estado").value="...";
}

function teste(retornoJson)
{
  if(!("erro" in retornoJson))
  {
    document.getElementById('rua').value=(retornoJson.logradouro);
    document.getElementById('complemento').value=(retornoJson.complemento)
    document.getElementById('bairro').value=(retornoJson.bairro);
    document.getElementById('cidade').value=(retornoJson.localidade);
    document.getElementById('estado').value=(retornoJson.uf);
  }
  else
  {
    //cep nao foi encontrado
    limparForm();
    alert("Cep nao foi encontrado")

  }
}



function pesquisarCep(cepRecebido)
{
  alert("Cep recebido: " +cepRecebido )

  var cep = cepRecebido.replace(/\D/g, '') //regex para retirar os nao numeros da string

  console.log(cepRecebido);
  console.log(cep);
  
  if(cep!="")
  {
    //cep tem um valor
    var validacep = /^[0-9]{8}$/;
    
    if(validacep.test(cep))
    {
      //cep esta no formato correto
      loading();

      var e = document.createElement('script'); //cria elemento js 
      e.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=teste'; // o src o retorno desse https (no caso o json), chamando outra funcao no callback
      
      document.body.appendChild(e);  //adiciona a  ao html
    }
    else
    {
      //cep nao esta no formato correto
      limparForm();
      alert("Formato de CEP inválido.");
    }
  }
  else
  {
    //cep nao tem valor
    alert("Insira um valor para cep")
  }
} 


