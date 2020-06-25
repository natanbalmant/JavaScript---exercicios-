function exe11() {
    var contas = []
    var cont = 0
    var medicos = []
    var pacientes = []
    do{
        var consultas = new Object()
        consultas.numero = cont
        cont++
        consultas.data = Number(prompt("Informe a Data da consulta (dd/mm/aa): "))
        consultas.diagnostico = prompt("Informe o diagnostico: ")
        consultas.paciente = Number(prompt("Informe o numero do paciente: "))
        consultas.medico = Number(prompt("Informe o numero do médico: "))
        contas.push(consultas)

       
        var acheiPaciente = false
        for(var i=0; i < paciente.length; i++){
            if(pacientes[i].numero == consultas.paciente){
                acheiPaciente = true
                break
            }
        }
        var resp = prompt(`Deseja cadastrar o cliente? (s) ou (n)`)
        if(acheiPaciente == false){
            var objeto = new Object()
            objeto.numero = consultas.paciente
            objeto.codigo = Number(prompt("Informe o nome do codigo: "))
            objeto.nome = prompt("Informe o nome do cliente: ")
            objeto.endereco = prompt(`Informe o endereço do cleinte:`)
            objeto.idade = Number(prompt(`Informe a idade do cliente`))

            paciente.push(objeto)
        }
       
        var resp2 = prompt(`Deseja cadastrar o médico? (s) ou (n)`)
        var acheiMedico = false
        for(var i=0; i<medicos.length; i++){
            if(consultas[i].numero == consultas.medico){
                acheiMedico = true
                break
            }
        }
        if (acheiMedico == false){
            // cadastra o medico
            var med = new Object()
            med.codigo = Number(prompt(' Informe o código do médico: '))
            med.nome = prompt(`Informe o nome do médico: `)
            med.endereco = prompt(`Informe o endereço do médico: `)
            med.salario = Number(prompt(`Informe o salário do médico: `))
        }
    }
    while ((resp != 'n')&&(resp2 != 'n'))
    console.log(`Consultas marcadas ${numero}`)
    console.log(`Paciente: ${paciente}`)
    console.log(`Médico: ${medico}`)
}