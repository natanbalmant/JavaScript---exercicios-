function calcula() {
    var num1 = Number(document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    
    if ((num2 < 20) && (num1 < 60)) {
        document.write("O grupo de risco dessa pessoa é o nono grupo")
    } else if ((num2 < 20) && ((num1 < 90)&&(num1>60))){
        document.write("O grupo de risco dessa pessoa e o oitavo grupo")
    } else if ((num2 < 20)&&(num1 > 90)){
        document.write("O grupo de risco dessa pessoa e o setimo grupo")
    } else if ((num2 > 20 &&  num2 < 50)&&(num1 < 60)){
        document.write("O grupo de risco dessa pessoa e o sexto grupo")
    } else if ((num2 > 20 &&  num2 < 50)&&(num1 > 60 && num1 < 90)){
        document.write("O grupo de risco dessa pessoa e o quinto grupo")
    } else if ((num2 > 20 &&  num2 < 50)&&(num1 > 90)){
        document.write("O grupo de risco dessa pessoa e o quarto grupo")
    } else if ((num2 > 50)&&(num1 < 60)){
        document.write("O grupo de risco dessa pessoa e o terceiro grupo")
    } else if ((num2 > 50)&&(num1> 60 && num1 < 90)){
        document.write("O grupo de risco dessa pessoa e o segundo lugar")
    } else if ((num2 > 50)&&(num1 > 90)){
        document.write("O grupo de risco dessa pessoa e o primeiro grupo")
    }


    document.getElementById("media").innerHTML = media.toFixed(2)
}