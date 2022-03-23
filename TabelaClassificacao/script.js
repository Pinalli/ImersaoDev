var alberto = { nome: "Alberto", vitorias: 2, empates: 1, derrotas: 2, pontos: 0 } //Obejct
var luciana = { nome: 'Luciana', vitorias: 3, empates: 2, derrotas: 1, pontos: 0 }
var Rodrigo = { nome: 'Rodrigo', vitorias: 1, empates: 3, derrotas: 0, pontos: 0 }

function calculatePoint(player) {
    var point = (player.vitorias * 3) + player.empates
    return point;
}

alberto.pontos = calculatePoint(alberto)
luciana.pontos = calculatePoint(luciana)

var players = [alberto, luciana, Rodrigo]

function displaysPlayerOnScreen(players) {
    var elem = ""
    for (var i = 0; i < players.length; i++) {
        elem += "<tr><td>" + players[i].nome + "</td>"
        elem += "<td>" + players[i].vitorias + "</td>"
        elem += "<td>" + players[i].empates + "</td>"
        elem += "<td>" + players[i].derrotas + "</td>"
        elem += "<td>" + players[i].pontos + "</td>"
        elem += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elem += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elem += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elem += "</tr>"
    }

    var tablePlayers =
        document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elem;
}

displaysPlayerOnScreen(players)



function adicionarVitoria(i) {
    var player = players[i]
    player.vitorias++
    player.pontos = calculatePoint(player)
    displaysPlayerOnScreen(players)
}

function adicionarEmpate(i) {
    var player = players[i]
    player.empates++
    player.pontos = calculatePoint(player)
    displaysPlayerOnScreen(players)
}

function adicionarDerrota(i) {
    var player = players[i]
    player.derrotas++
    displaysPlayerOnScreen(players)
}