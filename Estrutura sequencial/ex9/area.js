function calcula() {
    var maior = document.getElementById("maior").value;

    var menor = document.getElementById("menor").value;

    var altura = document.getElementById("altura").value;

    var m1 = Number (maior)

    var m2 = Number (menor)

    var total = ((m1 + m2) * altura) / 2

    document.getElementById("total").innerHTML = total.toFixed(2)
}