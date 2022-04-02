function Converter() {

    var valueElem = document.getElementById("valor")
    var value = valueElem.value
    var valueDolar = parseFloat(value)



    var valueInReal = valueDolar * 5
    console.log(valueInReal)

    var valueConverted = document.getElementById("valorConvertido")
    var result = "O resultado em Reais é  R$ " + valueInReal
    valueConverted.innerHTML = result

}