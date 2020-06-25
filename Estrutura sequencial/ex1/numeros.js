function calcula() {
    // recuperar o peso digitado pelo usuario
    // getElementById -> recupera o elemento com o id peso
    // .value recupera o valor do elemneto 
    var um = document.getElementById("um").value;

    var dois = document.getElementById("dois").value;

    // calcular o IMC
    var imc = um - dois

    // devolver para o html o valor do imc
    document.getElementById("imc").innerHTML = imc.toFixed(2)
}