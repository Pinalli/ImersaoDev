//https://www.figma.com/file/I4p9ndfOKgjDKalFwd5ASr/Imers%C3%A3o-Dev---Aula-10?node-id=0%3A1
//https://www.figma.com/file/1flmz2iauuNs8JsY6eaBHI/Imers%C3%A3o-Dev---Aula-9?node-id=0%3A1

var cards1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}

var cards2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
}

var cards3 = {
    nome: "Mestre Yoda",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 9
    }
}

var cards = [cards1, cards2, cards3]
var cardsMachine
var cardsPlayer

function sortearCarta() {
    var numberCardMachine = parseInt(Math.random() * cards.length)
    cardsMachine = cards[numberCardMachine]


    var numberCardPlayer = parseInt(Math.random() * 3)
    while (numberCardMachine == numberCardPlayer) {
        numberCardPlayer = parseInt(Math.random() * 3)

    }
    cardsPlayer = cards[numberCardPlayer]
    console.log(cardsPlayer)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    displayOptions()
}

function displayOptions() {
    var options = document.getElementById("opcoes")
    var optionsText = ""

    for (var atributo in cardsPlayer.atributos) {
        optionsText +=
            "<input type='radio'  name='atributo' value='" + atributo + "'>" + atributo //atributo ++
    }
    options.innerHTML = optionsText
}

function getSelectedAttribute() {
    var radioAttribute = document.getElementsByName("atributo")
    for (var i = 0; i < radioAttribute.length; i++) {
        if (radioAttribute[i].checked == true) {
            return radioAttribute[i].value
        }
    }
}

function jogar() {
    var attributeSelected = getSelectedAttribute()
    var elemenResult = document.getElementById("resultado")
    var valueCardsPlayer = cardsPlayer.atributos[attributeSelected]
    var valueCardsMachine = cardsMachine.atributos[attributeSelected]
    console.log(cardsPlayer.atributos[attributeSelected])

    if (cardsPlayer > valueCardsMachine) {
        elemenResult.innerHTML = "Você venceu!"
    } else if (valueCardsMachine > valueCardsPlayer) {
        elemenResult.innerHTML = "Você perdeu! A carta da máquina é maior que a sua!"
    } else {
        elemenResult.innerHTML = "Empatou!"
    }
    console.log(cardsMachine)

}
