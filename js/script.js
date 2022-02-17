//passo o valor da minha url para uma variavel
const dataBase = "https://viacep.com.br/ws/";

//assosio os campos cep e btn as respectivas variaveis
const cep = document.querySelector("#cep");
const btn = document.querySelector("#btn");

//associos os campos que irão receber um valor as variaveis 
const rCep = document.querySelector("#rCep");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#uf");
const erro = document.querySelector("#erro");


//crio uma função que recebe os dados vindos do json(linha 32) e coloco 
//para imprimir os valores em frente aos campos
function dataInfo(data) {
  erro.innerHTML = "";
  rCep.innerHTML = data.cep;
  cidade.innerHTML = data.localidade;
  uf.innerHTML = data.uf;
}


//coloco minha variavel btn para ser "ouvida" por um click e trato ela em arrow function
btn.addEventListener("click", () => {
  // crio uma nova variavel url e passo o valor de database concatenando com o valor do cep
  const url = `${dataBase}${cep.value}/json/`;
  // Uso o fetch pra fazer uma requisicao na url criada via metodo GET
  fetch(url, {
    method: "GET",
  })//O then pega o que a função fetch me trouxe e joga pra dentro da variavel response
    // que por meio de arrow function retorna o valor de response em json
    .then((response) => {
      return response.json();
    })
    //esse then aqui faz com que meu json seja jogado pra dentro do dataInfo e recuperado mais acima
    .then((json) => {
      dataInfo(json);
    })
    //aqui no catch é se caso nenhuma das tratativas der certo eu retorno o meu erro dentro da minha pagina
    .catch((err) => {
      erro.innerHTML = "Erro/CEP não encontrado";
    });
});
