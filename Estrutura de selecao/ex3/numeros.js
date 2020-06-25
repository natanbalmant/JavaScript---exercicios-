function calcula() {
    var num1 = Number (document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    var media = num1 != num2

    if (num1 > num2){
        document.write("Numero menor " + num2 )
    }
         else if (num2 > num1) {
                document.write("Numero Menor " + num1)
            }
                else {
                    document.write("Numeros iguais! Não Pode!")
                }


    document.getElementById("media").innerHTML = media.toFixed(2)
}