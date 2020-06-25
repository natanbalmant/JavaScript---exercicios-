function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    var opcao = Number(document.getElementById("opcao").value);

    switch(opcao){
        case 1 : document.write("O primeiro numero elevado ao segundo é igual a: " + Math.pow(num1 , num2));
        break;
        case 2 : document.write("Produto entre os numeros digitados: " + Math.sqrt(num1) + 
        "  Raiz do segundo numero " + Math.sqrt(num2));
        break;
        case 3 : document.write("Divisao dos numeros: " + Math.cbrt(num1) + 
        " Raiz cubica do segundo numero: " + Math.cbrt(num2))
        break;
        default: opcao = "Opcao invalida"
    }


    document.getElementById("media").innerHTML = media.toFixed(2)
}