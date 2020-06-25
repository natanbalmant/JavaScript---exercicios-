function nome(){
    var nome1 = prompt(`Digite um nome`)
    var nome2 = prompt(`digite outro nome:`)
    var nome3 = prompt(`Digite mais um nome`)

    if((nome1>nome2)&&(nome1>nome3)&&(nome2>nome3)){
        console.log(nome1, nome2, nome3)
    }
    else if((nome2>nome1)&&(nome2>nome3)&&(nome1>nome3)){
        console.log(nome2, nome1, nome3)
    }
    else if((nome3>nome1)&&(nome3>nome3)&&(nome1>nome2)){
        console.log(nome3, nome2, nome1)
    }
    else{
        console.log(nome2, nome3, nome1)
    }
}