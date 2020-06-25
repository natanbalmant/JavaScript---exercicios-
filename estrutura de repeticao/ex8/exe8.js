function exe8(){
    var idade
    var peso
    var altura
    var olhos
    var cabelos
    var contador
    var item1 
    var item2
    var item3
    var item4
    var ruivas
    var azul
    for(contador = 0; contador < 6; contador++){
        idade = Number(prompt("Informe sua idade"))
        peso = Number(prompt("Informe seu peso"))
        altura = Number(prompt("Informe sua altura"))
        olhos = prompt("Informe a cor do olho(azul, preto, verde, castanho)")
        cabelos = prompt("Informe a cor do cabelo(preto, castanho, louro, ruivo)")
        
        switch(item3){
            case `azul`: azul++
            break
            default:
                olhos++
        }
        switch(item4){
            case `ruiva`: ruivas++
            break
            default:
                cabelos++
        }
        if((idade > 50)&&(peso<60)){
            item1++
        }
        if(altura<1.50){
            item2
        }
    }
    alert(`Pessoas com idade superior a 50 e peso inferior a 60kg ${item1}`)
    alert(`Pessoas com altura inferior a 1,50 m ${item2}`)
    alert(`Pessoas com olhos azuis ${azul}`)
    alert(`Pessoas ruivas que nao possuem olhos azuis ${item4}`)
}
