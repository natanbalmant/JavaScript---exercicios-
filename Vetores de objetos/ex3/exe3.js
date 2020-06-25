function exe3(){
    var habitantes = []
    for(var i = 0; i<50; i++){
        var habitante = new Object()
        habitante.sexo = prompt("Informe o sexo M para masculino e F para feminino: ")
        habitante.altura = Number(prompt("Informe sua altura: "))
        habitante.idade = Number(prompt("Informe sua idade: "))
        habitante.olho = prompt("Informe a cor dos olhos (a - azul, v - verde ou c - castanhos)")
        habitantes.push(habitante)
    }

    var mediaIdade
    var maiorIdade = habitante[0].idade
    var cont = 0
    var qtd = 0
    var homens = []
    
    for(var i = 0; i<50; i++){
        if (habitantes[i].idade > maiorIdade){
        maiorIdade = habitantes[i].idade
        }
        if(habitantes[i].sexo == `M`){
            homens++
        }
        if (((vetor[i].sexo == "F") && (vetor[i].idade >= 20) && (vetor[i].idade <= 45)) ||
            ((vetor[i].olhos == "V") && (vetor[i].altura < 1.70))) {
            qtd++
        }

        
        if ((habitantes[i].olho == `c`) && (habitantes[i].altura > 1,60)){
            mediaIdade = habitantes[i].idade
            cont++
        }
    }
    console.log(`A média das idades das pessoas com olhos castanhos e altura superior a 1.60 é: ${cont}`)
    console.log(`A maior idade entre os habitantes é: ${maiorIdade}`)
    console/log(`Resultado do item 3: ${qtd}`)
    console.log(`O percentual de homens é: ${homens/50*100}`)
}