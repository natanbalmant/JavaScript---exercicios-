function exe3(){
    var nome = []
    var qtd = []
    var i = 0

    while(i < 10){
        nome.push(Number(prompt("Informe o nome do produto: ")))
        qtd.push(Number(prompt("Informe o total do produto em estoque: ")))
        i++
    }
     var codigo
     codigo = Number(prompt("Informe código do cliente"))
     do {
       var nomeVenda = prompt("Informe nome do produto para venda")
       
       var pos = nome.indexOf(nomeVenda)
       if(pos == -1){
           console.log("Produto não existe")
       } else{
           var estoque = qtd[pos]
           var qtdVenda = Number(prompt("Informe qtde para compra"))
            if(qtdVenda > estoque){
                console.log(`Estoque não suportado - ${estoque}`)
            } else {
                qtde[pos] = qtde[pos] - qtdVenda
                console.log(`Venda realizada com sucesso`)
            }
        }
        
        codigo = Number(prompt("Informe código do cliente. Digite 0 para encerrar"))
     }
     while (codigo != 0)


}