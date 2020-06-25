function bacana() {
    var consultas = []
    for(var i=0;i<10;i++){
        var consulta = new Object()
        consulta.codigo = Number(prompt(`Informe o código da consulta`))
        consulta.diagnostico = prompt(`Informe diagnóstico da consulta`)
        consulta.tratamento = prompt(`Informe tratamento da consulta`)
        consulta.data = prompt(`Informe a data da consulta dd/mm/aaaa`)

        consultas.push(consulta)
    }

    var dataInicial = prompt(`Informe data inicial`)
    var dataFinal = prompt(`Informe data final`)
    var dataInicialVetor = dataInicialTexto.split('/')
    var dataFinalVetor = dataFinalTexto.split('/')

    var dataInicial = new Date(dataInicialVetor[2], dataInicialVetor[1]-1, dataInicialVetor[0])
    var dataFinal = new Date(dataFinalVetor[2], dataFinalVetor[1] -1, dataFinalVetor[0])

    for(var i=0; i<consulta.length;i++){
       var dataVetor = consulta[i].data.split('/')
       var dataConsulta = new Date(dataVetor[2], dataVetor[1] -1, dataVetor[0])
       if((dataConsulta >= dataInicial)&&(dataConsulta <= dataFinal)){
           console.log(consulta[i])
       } 
    }

}