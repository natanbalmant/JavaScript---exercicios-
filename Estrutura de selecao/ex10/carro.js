function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var final = num1 * 5/100

    var final2 = num1 * 35/100

    var final3 = num1 * 35/100
    
    if (num1 <= 12000) {
        document.write("O valor do carro é : " + (final + num1))
    }
        else if ((num1 > 12000)&&(num1 < 25000)) {
            document.write("O valor do carro e: " + (final2 + num1))
        }
            else if (num1 > 25000) {
                document.write("O valor do carro e: " + (final3 + num1))
            }
    


    document.getElementById("media").innerHTML = media.toFixed(2)
}