function ex1() {
    var produto = []
    do{
        var produtos = new Object() 
        //verificar se o código já existe
        var achou = false // assume que o c;odigo não existe
        for(var i=0;i<produto.length; i++){
            if(produtos.codigo == produto[i].codigo){
                achou = true
                break
            }
        }
        if(achou == false){
        produtos.codigo = Number(prompt(`Digite o código do produto:`))
        produtos.nome = prompt(`Digite o nome do produto: `)
        produtos.preco = Number(prompt(`Digite o preço do produto`))
        produtos.quantidade = Number(prompt(`Digite a quantidade de produtos`))
        produtos.tipo = prompt(`Digite o tipo de produto: `)
        // armazena a validade já como objeto Date
        var auxiliar = prompt(`Informe a validade no formato dd/mm/aaaa`).split('/')
        produtos.validade = new Date(auxiliar[2], auxiliar[1]-1, auxiliar[0])

       
        produto.push(produtos)  
        }
        else{
            alert(`Código já existe`)
            continue
        }
        
        
        var resp = prompt(`Deseja continuar e cadastrar novo produto? (s) ou (n)`)
    }
    while (resp != 'n')
    // processamento
    var soma = 0
    var menorQtde = produto[0].qtde
    var nomeMenorQtde = produto[0].nome

    //data inicial
    var  auxDI = prompt(`Informe a data inicial`).split('/')
    var dataInicial = new Date(auxDI[2], auxDI[1]-1, auxDI[0])

    //data final
    var auxDF = prompt(`Informe a data final`).split('/')
    var dataFinal = new Date(auxDF[2], auxDF[1]-1, auxDF[0])

    //solicita os 3 primeiros digitos do tipo
    var tipo = prompt(`Informe os 3 primeiros caracteres do tipo desejado`)

    for(var i = 0; i< produtos.length; i++){
        soma = soma + produto[i].preco

        if(produto[i].qtde < menorQtde){
            menorQtde = produto[i].qtde // atualiza menor qtde
            nomeMenorQtde = produto[i].nome // atualiza nome menor qtde
       }
       // verifica
       if((produto[i].validade > dataInicial) && (produto[i].validade < dataFinal)){
           console.log(produto[i])
       }

       //verifica os caracteres iguais
       if(produto[i].tipo.slice(0,3) == tipo){
           console.log(produto[i])
       }
    }
    if(produtos.length == 0){
        console.log(`Nenhum produto informado`)
    }
    else{
        console.log(`A média é de ${soma/produto.length}`)
    }
    console.log(`Nome do produto com menor qtde ${nomeMenorQtde}`)

    //calcular e mostrar o nome do produto com menor quantidade em estoque
    //mostar os produtos com validade entre um intervalo pelo usuário
    //mostrar todos os produtos contendo os 3 primeiros caracteres do tipo de produto informado pelo usuário
    // slice, pega um pedaço da string

}