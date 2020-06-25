function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    var opcao = Number(document.getElementById("opcao").value);

    switch(opcao){
        case 1 : document.write("A media entre os numeros e: " + (num1 + num2)/2);
        break;
        case 2 : document.write("Diferenca do maior pelo menor: " + ((num1 - num2) || (num2 - num1)));
        break;
        case 3 : document.write("Produto entre os numeros digitados: " + (num1 * num2));
        break;
        case 4 : document.write("Divisao dos numeros: " + (num1 / num2))
        break;
        default: opcao = "Opcao invalida"
    }


    document.getElementById("media").innerHTML = media.toFixed(2)
}