var jog1 = { nome: "Jogador 1", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var jog2 = { nome: "Jogador 2", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var jog3 = { nome: "Jogador 3", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var jog4 = { nome: "Jogador 4", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var jog5 = { nome: "Jogador 5", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

jog1.pontos = calculaPontos(jog1);
jog2.pontos = calculaPontos(jog2);
jog3.pontos = calculaPontos(jog3);
jog4.pontos = calculaPontos(jog4);
jog5.pontos = calculaPontos(jog5);

var jogadores = [jog1, jog2, jog3, jog4, jog5];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
