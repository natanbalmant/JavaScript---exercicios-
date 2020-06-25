function calcula() {
    // recuperar o peso digitado pelo usuario
    // getElementById -> recupera o elemento com o id peso
    // .value recupera o valor do elemneto 
    var peso = document.getElementById("peso").value;

    var altura = document.getElementById("altura").value;

    // calcular o IMC
    var imc = (peso / (altura * altura))

    // devolver para o html o valor do imc
    document.getElementById("imc").innerHTML = imc.toFixed(2)
}