function exe18(){
var idade
var sexo
var salario
var conta = 0
var somaSalario = 0
var maiorIdade = 0
var menorIdade = 200
var mulherAte200 = 0
var menorSalario = 10000
var idadeMenorS = 0
var sexoMenorS = 0

idade = Number(prompt("Informe sua idade"))

do {
    conta++ 
    sexo = prompt("Informe M para masculino e F para feminino")
    salario = Number(prompt("Informe um salário"))
    
    if(salario < menorSalario){
        menorSalario = salario 
        idadeMenorS = idade
        sexoMenorS = sexo
    }

    somaSalario = somaSalario + salario
    
    if((sexo == `F`)&&(salario <= 200)){
        mulherAte200++
    }
    // fazer os ifs
    
    if(idade > maiorIdade){
        maiorIdade = idade
    }
    if(idade < menorIdade){
        menorIdade = idade // atualizando a idade
    }

    idade = Number(prompt("Informe outra idade. Digite idade negativo para encerrar o programa"))

}
while (idade >= 0)
alert(`A média dos salários do grupo é: ${somaSalario/conta}`)
alert(`A maior e a menor idade do grupo: ${maiorIdade} e ${menorIdade}`)
alert(`A quantidade de mulheres com salário até R$ 200: ${mulherAte200}`)
alert(`A idade e o sexo da pessoa que possui o menor salário: ${idadeMenorS}, ${sexoMenorS}, ${menorSalario}`)
}