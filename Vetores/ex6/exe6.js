function exe6(){
    var nome = []
    var venda = []
    var percent = []
    var i = 0

    for(var i = 0; i < 5; i++){
        nome.push(prompt("Informe o nome do vendedor: "))
        venda.push(Number(prompt("Informe valor das vendas do vendedor: ")))
        percentual.push(Number(prompt("Informe valor do percentual de comissão do vendedor")))
    }
    // processamento
    var toral = 0
    var comissao = 0
    var menoComi = 100000
    var nomeMenorComi 
    var maiorComi = 0
    var nomeMiorComi
    for(var i=0; i<5; i++){
        total = toral + venda[i]
        comissao = (venda[i] * percent[i]) / 100
        console.log(`O vendedor ${nome[i]} vai receber de comissão ${comissao}`)

        if(comissao < menoComi){
            menoComi = comissao
            nomeMenorComi = nome[i]
        }
        if(comissao > maiorComi){
            maiorComi = comissao
            nomeMiorComi = nome[i]
        }
        
    }
    console.log(`Total de vendas ${toral}`)
    console.log(`Menor comissão ${menoComi} de ${nomeMenorComi}`)
    console.log(`Maior comissão ${maiorComi} de ${nomeMiorComi}`)
}