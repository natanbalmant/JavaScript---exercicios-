function exeData() {
    var data1 = prompt(`Informe uma data (dd/mm/aaaa): `)
    var data2 = prompt(`Informe uma data (dd/mm/aaaa): `)

    var vetor = data1.split('/')
    var vetor2 = data2.split('/')

    var d1 = new Date(vetor[2], vetor[1]-1, vetor[0])
    var d2 = new Date(vetor2[2], vetor[1]-1, vetor[0])

    if(d1 > d2){
        console.log(`A primeira é maior`)
    }
    else {
        console.log(`A segunda é maior`)
    }


}