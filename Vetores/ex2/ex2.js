function exe2(){
    var vetor = []
    var i = 0

    while(i < 7){
       vetor.push(Number(prompt("Informe um número")))
       i++ 
    }

    var multi2 = []
    var multi3 = []
    var multi23 = []
    var i = 0

    while(i < 7){
        if (vetor[i]%2 == 0){
            multi2.push(vetor[i])
        } 
        if (vetor[i]%3 == 0){
            multi2.push(vetor[i])
        } 
        if ((vetor[i]%2 == 0)&&(vetor[i]%3 == 0)){
            multi2.push(vetor[i])
        } 
        
    i++
    }
    console.log(`Numeros multiplos de 2 ${multi2}`)
    console.log(`Numeros multiplos de 3 ${multi3}`)
    console.log(`Numeros multiplos de 2 e 3 ${multi23} `)
}