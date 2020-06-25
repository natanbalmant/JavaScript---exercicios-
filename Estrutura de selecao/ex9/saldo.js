function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var final = num1 * 30/100

    var final2 = num1 * 25/100

    var final3 = num1 * 20/100

    var final4 = num1 * 10/100
    
    if (num1 >= 400) {
        document.write("O valor do saldo medio é : " + num1 + " O valor com o saldo de credito e: " + (final + num1))
    }
        else if ((num1 > 300)&&(num1 < 400)) {
            document.write("O valor do saldo medio e: " + num1 + " O valor com o saldo de credito e: " + (final2 + num1))
        }
            else if ((num1 < 300)&&(num1 > 200)) {
                document.write("O valor do saldo medio e: " + num1 + " O valor com o saldo de credito e: " + (final3 + num1))
            }
                else if (num1 <= 200) {
                    document.write("O valor do saldo medio e: " + num1 + " O valor com o saldo de credito e: " + (final4 + num1))
                }
    


    document.getElementById("media").innerHTML = media.toFixed(2)
}