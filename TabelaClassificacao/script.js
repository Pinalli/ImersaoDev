var alberto = { nome: "Alberto", vitorias: 2, empates: 1, derrotas: 2, pontos: 0 } //Obejct

function calculatePoint(player) {
    var point = (player.vitorias * 3) + player.empates
    return point;
}

names.pontos = calculatePoint(alberto)


var players = [alberto]

function displaysPlayerOnScreen(players) {
    var elem = ""
    for (var i = 0; i < players.length; i++) {
        elem += "<tr><td>" + players[i].nome + "</td>"
        elem += "<td>" + players[i].vitorias + "</td>"
        elem += "<td>" + players[i].empates + "</td>"
        elem += "<td>" + players[i].derrotas + "</td>"
        elem += "<td>" + players[i].pontos + "</td>"
        elem += "<td><button onClick='adicionarVitoria()'>Vitória</button></td>"
        elem += "<td><button onClick='adicionarEmpate()'>Empate</button></td>"
        elem += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>"
        elem += "</tr>"
    }

    var tablePlayers =
        document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elem;
}
displaysPlayerOnScreen(players)