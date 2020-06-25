function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    var num3 = Number(document.getElementById("num3").value);

    var maior = num1 != num2 != num3

    if ((num1 > num2)&&(num1 > num3))
    {
        document.write("Numero Maior " + num1 )
    }
        else if ((num2 > num1) && (num2 > num3)) 
            {
                document.write("Numero Maior " + num2)
            }
                else 
                {
                    document.write("Numero maior " + num3)
                }
                  


    document.getElementById("maior").innerHTML = maior.toFixed(2)
}