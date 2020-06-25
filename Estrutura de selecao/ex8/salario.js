function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var final = num1 * 35/100

    var final2 = num1 * 15/100
    
    if (num1 <= 300) {
        document.write("Seu salario agora é : " + (final + num1))
    }
        
        else if (num1 > 300) {
            document.write("Seu salario agora e: " + (final2 + num1))
        }
    
            else  {
            document.write("Seu salário NÃO tera reajuste!")
        }
    


    document.getElementById("media").innerHTML = media.toFixed(2)
}