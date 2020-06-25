function exe3(){

    var i = 1
    var idade
    var cont1 = 0
    var cont2 = 0
    var cont3 = 0
    var cont4 = 0
    var cont5 = 0
    var porcentSeg = 0
    var porcentPrim = 0 
    
    while (i <= 8){
        idade = Number(prompt(`Informe sua idade ${i}`))
        i++
        if (idade <= 15){
            cont1 ++; 
            alert (`pessoas com menos de 15 anos ${cont1}`)
        } 
        else if ((idade >= 16) && (idade <= 30)){
            cont2 ++;
            alert(`pessoas de 16 a 30 anos ${cont2}`)
        }
        else if ((idade >= 31)&&(idade <= 45)){
            cont3 ++;
            alert(`pessoas de 31 a 45 anos${cont3}`)
        }
        else if ((idade >= 46)&&(idade <= 60)){
            cont4 ++;
            alert(`pessoas de 46 a 60 anos ${cont4}`)
        }
        else if (idade > 60){
            cont5 ++;
            alert(`pessoas com mais de 60 anos ${cont5}`)
        }

        porcentPrim = Number((cont1)* 100) / 8
        porcentSeg = Number((cont5)* 100) / 8
    }
        alert(`Porcentagem de pessoas na primeira faixa etaria: ${porcentPrim} %`)
        alert(`Porcentagem de pessoas na ultima faixa etaria ${porcentSeg} %`)
}