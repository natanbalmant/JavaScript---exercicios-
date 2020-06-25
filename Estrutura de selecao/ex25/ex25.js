function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    var h = num1 - (0.66 * (num2))
    
    if (h < 600){
        document.write("O seu premio sera de R$100 reais")
    } else if (h >= 600 && h < 1200){
        document.write("O seu premio sera de R$200 reais")
    } else if (h >= 1200 && h < 1800){
        document.write("O seu premio sera de R$300 reais")
    } else if (h > 1800 && h < 2400){
        document.write("O seu premio sera de R$400 reais")
    } else if (h >= 2400){
        document.write("O seu premio sera de R$500 reais")
    }


    document.getElementById("media").innerHTML = media.toFixed(2)
}