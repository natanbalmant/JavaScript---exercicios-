function idade() {
    var nasceTexto = prompt(`Informe a data de nascimento dd/mm/aaaa`)

    var nasceVetor = nasceTexto.split('/')
    var nasce = new Date(nasceVetor[2], nasceVetor[1] -1, nasceVetor[0])

    var idade = agora.getFullYear() - nasce.getFullYear()

    if ((nasce.getMonth() < agora.getMonth())&&(nasce.getDate() > agora.getDate())){
        idade--
    }

    console.log(`Minha idade ${idade}`)
}