function exe4(){
    var vetor = []
    var i = 0

    while(i < 15){
       vetor.push(Number(prompt("Informe um numero")))
       i++ 
    }

    var posicao = []
    var i = 0

    while(i < 15){
        if(vetor[i] == 30){
            posicao.push(i)
        i++
        }
    }
    console.log(`Posição dos elementos iguais a 30: ${posicao}`)

}