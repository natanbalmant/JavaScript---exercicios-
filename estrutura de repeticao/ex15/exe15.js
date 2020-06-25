function exe15(){
    var resposta 
    var sexo
    var cont
    var sim
    var masc
    var fem
    var nao
    var qtdeHS

    for(cont = 1; cont < 3; cont++){
        resposta = prompt("Informe se é sim ou não")
        sexo = prompt("Qual o seu sexo (M ou F)")
        switch(resposta){
            case `sim`: 
                sim++ // respondeu sim
                if (sexo == 'F'){
                    fem ++ // mulher que respondeu sim
                }
                else if (sexo == 'M') {
                    qtdeHS++ // homem que respondeu sim
                }
                break
            case `nao`: nao++ // respondeu nao
                if (sexo == 'M'){
                    masc ++ // homem que respondeu nao
                }
                break 
        }

    }
    alert(`Pessoas que responderam sim: ${sim}`)
    alert(`Pessoas que responderam não: ${nao}`)
    alert(`Mulheres que responderam sim: ${fem}`)
    alert(`Homens que responderam não: ${masc/(masc+qtdeHS)*100}`)
}