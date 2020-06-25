function exe2(){
    var preco = 5.00
    var quantidade = 120
    var despesa = 200
    var lucro = 0
    var maiorLucro

    while (preco >= 1.00){
        lucro = (preco * quantidade) - despesa
        if (lucro > maiorLucro){
            maiorLucro = lucro
        }
        preco = preco - 0.50
        quantidade = quantidade + 26
    }
    alert(`Maior lucro ${maiorLucro}`)
}