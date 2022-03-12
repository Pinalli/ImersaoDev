
function Chutar() {
    var secretNumber = parseInt(Math.random() * 11)
    console.log("Aleatório ", secretNumber)

    var result = document.getElementById("resultado")

    var kick = parseInt(document.getElementById("valor").value)
    console.log(kick)
    if (kick === secretNumber) {
        result.innerHTML = "Aaaaê!! Acertou!!!"
    } else if (kick > 10 || kick < 0) {
        result.innerHTML = "Você digitar um numero entre 0 e 10"
    }
    else {

        result.innerHTML = "Errrroooouu! O número secreto era o " + secretNumber
    }
    console.log(secretNumber)
}