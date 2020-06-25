function exe16(){
    var nome = []
    var preco  = []
    for (var i = 0; i < 5; i++){
        nome.push(prompt("Digite o nome do produto: "))
        preco.push(Number(prompt("Digite o preço do produto: ")))
    }
    //processamento
    var qtd = []
    var nomePreco = []
    var media = []
    var somaPreco = 0
    for (var i = 0; i < 5; i++){
        if(preco < 50){
            qtd = preco[i]
        }
        if((preco > 50)&&(preco < 100)){
            nomePreco = nome[i]
        }
        if(preco > 100){
            somaPreco = preco + preco[i]
            media = somaPreco / 5
        }
    }
    console.log(`Quantidade de produtos com preço inferior a R$ 50: ${qtd}`)
    console.log(`O nome dos produtos com preço entre R$ 50 e R$ 100: ${nomePreco}`)
    console.log(`A média dos preços dos produtos superior a R$ 100: ${media}`)
}