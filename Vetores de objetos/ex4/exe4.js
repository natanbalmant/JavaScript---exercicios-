function exe4(){
    var vetor = []
    for(var i = 0; i< 5; i++){
        vetor.push({
            idade: Number(prompt("Informe sua Idade: ")),
            sexo: prompt("Informe seu sexo com F para feminino e M para masculino: "),
            renda: Number(prompt("Informe sua renda familiar: ")),
            filhos: Number(prompt("Informe o número de filhos: "))
        })
    }

    var  mediaSalario = []
    var menorIdade = vetor[0].idade
    var maiorIdade =vetor[0].idade
    var mulheres = []

    for(var i = 0; i< 5; i++){
        if(vetor[i].renda){
            mediaSalario++
        }  
        if(vetor[i].idade < menorIdade){
            menorIdade = vetor[i].idade
        }
        if(vetor[i].idade > maiorIdade){
            maiorIdade = vetor[i].idade
        }
        if((vetor[i].sexo == `F`) && (vetor[i].filhos > 2) && (vetor[i].renda < 600)){
            mulheres++
        }
    }

    console.log(`Média dos salários entre os habitantes: ${mediaSalario/5}`)
    console.log(`A menor idade ${menorIdade}`)
    console.log(`A maior idade: ${maiorIdade}`)
    console.log(`Mulheres com mais de dois filhos: ${mulheres}`)





}