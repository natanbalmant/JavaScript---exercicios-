function exe2(){

    var habitantes = []
    for(var i =0; i<20; i++){
        var habitante = new Object()
        habitante.salario = Number(prompt("Informe o salario: "))
        habitante.idade = Number(prompt("Informe a idade: "))
        habitante.filhos = Number(prompt("Informe filhos: "))
        habitante.sexo = prompt("Informe o sexo: ")
            //Insere no vetor
        habitantes.push(habitante)
    }
    
    var somaSalario = 0
    var somaFilhos = 0
    var maiorSalario = habitantes[0].salario
    var qtdM1000 = 0

    for(var i =0; i<20; i++){
        somaSalario = somaSalario + habitantes[i].salario
        somaFilhos = somaFilhos + habitantes[i].filhos
        if (habitantes[i].salario > maiorSalario){
            maiorSalario = habitantes[i].salario
        }
        if ((habitantes[i].sexo == `F`) && (habitantes[i].salario > 1000)){
            qtdM1000++
        }
    }

   console.log(`Média ${somaSalario / 20}`)
   console.log(`O maior salario ${maiorSalario}`)
   console.log(`Média de filhos ${somaFilhos / 20}`)
   console.log(`Mulheres maior 1000 ${qtdM1000}/3*100`)
}