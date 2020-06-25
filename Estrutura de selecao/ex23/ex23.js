function calcula() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    
    var precounit
    if ((n1 >= 1)&&(n1 <= 10)){
        n2 = 10
    } else if ((n1 >= 11)&&(n1 <= 20)){
        n2 = 15
    } else if ((n1 >= 21)&&(n1 <= 30)){
        n2 = 20
    } else if ((n1 >= 11)&&(n1 <= 40)){
        n2 = 30
    } 

    else {
        n2 = 0
    }
    if (precounit != 0){

    var precototal = precounit * n2
// desconto
    var desconto
    if(precototal < 250){
        desconto = precototal * 5/100
    } else if ((precototal >= 250) && (precototal < 500)){
        desconto = precototal * 10/100
    } else{
        desconto = precototal * 15/100
    }
    var precofinal = precototal - desconto
    document.getElementById("resultado").innerHTML = `preco total: ${precototal} e preco final ${precofinal}`
    } else {
        document.getElementById("resultado").innerHTML = "codigo invalido"
    }
    

}