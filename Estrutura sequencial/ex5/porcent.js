function calcula() {
    var preco = document.getElementById("preco").value;
  
    var porcent = (preco * (10/100))  

    var TOTAL = preco - porcent  

    document.getElementById("TOTAL").innerHTML = TOTAL.toFixed(2)
}