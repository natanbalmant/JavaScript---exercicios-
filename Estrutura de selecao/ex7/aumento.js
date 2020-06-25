function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var final = num1 * 30/100
    
    if (num1 <= 500) {
        document.write("Seu salario agora é : " + (final + num1))
    }
        else {
            document.write("Seu salário NÃO tera reajuste!")
        }
    


    document.getElementById("media").innerHTML = media.toFixed(2)
}