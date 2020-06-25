function exe1(){
    var vetor = []
    var i = 0

    while(i < 6){
        vetor.push(Number(prompt("Informe um número")))
        i++
    }

    var pares = []
    var impares = []
    i = 0

    while(i < 6){
        if(vetor[i]%2 == 0){
           pares.push(vetor[i]) 
        }else{
            impares.push(vetor[i])
        }
    i++
    }
    console.log(`Elementos pares ${pares} - Qtde: ${pares.length}`)
    console.log(`Elementos impares ${impares} - Qtde: ${impares.length}`)
}