function calcula() {
  var preco = Number(document.getElementById("preco").value);
  var refri = document.getElementById("refri").value;
  var categoria = Number(document.getElementById("categoria").value);
  var aumento 
  if (preco <= 25){
      switch(categoria){
        case 1: aumento = preco * 5/100
                break
        case 2: aumento = preco * 8/100
                break
        case 3: aumento = preco * 10/100
                break
        default:    
            aumento = 0
      }
  } else {
    switch(categoria){
        case 1: aumento = preco * 12/100
                break
        case 2: aumento = preco * 15/100
                break
        case 3: aumento = preco * 18/100
                break
        default:    
            aumento = 0
      }
  }
  if ((categoria == 2) || (refri == `r`)){
      imposto = preco * 5/100
  } else {
      imposto = preco * 8/100
  }
  //novo preco 
  var novo = preco + aumento + imposto
  var classificacao
  if (novo <= 50){
      classificacao = "Barato"
  } else if ((novo > 50) && (novo < 120)){
      classificacao = "Normal"
  } else {
      classificacao = "Caro"
  }

    document.getElementById("media").innerHTML = `aumento: ${aumento} - imposto ${imposto}
     - novo valor ${novo} - classificacao ${classificacao}`
}