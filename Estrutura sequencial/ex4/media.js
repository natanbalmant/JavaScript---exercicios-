function calcula() {
    var nota1 = document.getElementById("nota1").value;

    var nota2 = document.getElementById("nota2").value;

    // var nota1 = Number(teste)

    // var nota2 = Number(teste)
   
    var ponderado = (((nota1 * 2) + (nota2 * 3)) / 5)


    document.getElementById("ponderado").innerHTML = ponderado.toFixed(2)
}