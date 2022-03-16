var carta1 = {
  nome: "Bulbasauro",
  imagem: 'https://images.tcdn.com.br/img/img_prod/752048/cortador_de_biscoito_bulbasaur_tema_pokemon_75200066_1_20200423132633.png',
  atributos: 
  {
    ataque: 7,
    defesa: 8,
    magia: 6  
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
  atributos:
  {
    ataque: 9,
    defesa: 8,
    magia: 2  
  }
};

var carta3 = {
  nome: "Shiryu de Dragão",
  imagem: 'https://img.elo7.com.br/product/zoom/2B30902/camiseta-shiryu-de-dragao-fullprint-nerd.jpg',
  atributos:
  {
    ataque: 5,
    defesa: 9,
    magia: 10 
  }
};

//[] criando lista.
var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
  //ParseInt= para criar números Inteiros.
  //Random= Números aleatórios.
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
    //console.log(cartaMaquina);
    
  var numeroCartaJogador = parseInt(Math.random() * 3);
    //While= Enquanto for igual, sorteia novamente.
  while (numeroCartaMaquina == numeroCartaJogador)
  {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  //exibirOpcoes();
  exibirCartaJogador();
}

function obtemAtributoSelecionado(){
  //GetElementsByName, está pegando o atributo do Input type NAME.
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++)
    {
      //[i] indice.
      if (radioAtributos[i].checked == true)
        {
          return radioAtributos[i].value;
        }
    }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class='resultado-final'>Venceu</p>"
  } else if (
    cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class='resultado-final'>Perdeu</p>"
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>"
  }
  
  divResultado.innerHTML = htmlResultado;
  
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
} 
  
function exibirCartaJogador(){
    
  //carta-jogador, DIV pegando do HTML
  var divCartaJogador = document.getElementById("carta-jogador");
  //($) avisa q p código é de javascript
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos)
  {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaJogador.atributos[atributo] + "<br>";
  }
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  
}

function exibirCartaMaquina(){
  
//carta-jogador, DIV pegando do HTML
  var divCartaMaquina = document.getElementById("carta-maquina");
//($) avisa q p código é de javascript
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  
  for (var atributo in cartaMaquina.atributos)
  {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaMaquina.atributos[atributo] + "</p>";
  }
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  
}