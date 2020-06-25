function calcula() {
    var peso = document.getElementById("peso").value;

    var total = (peso * 1000)

    document.getElementById("total").innerHTML = total.toFixed(1)
}