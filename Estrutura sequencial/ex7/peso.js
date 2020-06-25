function calcula() {
    var peso = document.getElementById("peso").value;

     var p1 = Number (peso)
    
    var total = (peso - p1 * (20/100))

    document.getElementById("total").innerHTML = total.toFixed(2)
}

function calcular() {
    var peso = document.getElementById("peso").value;

     var p1 = Number (peso)
    
     var peso = Number
    
    var total1 =  (p1 * (15/100) + p1)

    document.getElementById("total1").innerHTML = total1.toFixed(2)
}