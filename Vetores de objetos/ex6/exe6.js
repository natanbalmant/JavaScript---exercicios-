function exe6(){
    // noa sabemos quantas contas sao
    var contas = []
    var clientes = []
    var cont = 0 // numero das contas criadas
    do{
        var pizza = new Object()
        pizza.numero = cont
        cont++
        pizza.cliente = Number(prompt("Informe o numero da conta: "))
        pizza.saldo = Number(prompt("Informe o saldo da conta"))
        // insere a conta no vetor
        contas.push(pizza)
        console.log(`Conta cadastrada`)
        // verificar se o cliente ja existe
        var achei = false 
        for(var i=0; i < clientes.length; I++){
            if(clientes[i].numero == pizza.cliente){
                achei = true
                break // para de procurar
            }
        }
        if(achei == false){
            // cliente n existe
            var objeto = new Object()
            objeto.numero = pizza.cliente
            objeto.nome = prompt("Informe o nome do cliente: ")
            objeto.telefone = Number(prompt("Informe o telefone do cliente: "))
            objeto.endereco = prompt("Informe o endereço do cliente: ")

            clientes.push(objeto)
            console.log(`Cliente cadastrado`)
        }
        var resp = prompt(`Deseja continuar? (s) ou (n)`)
    }
    while (resp != 'n')
    console.log(contas)
    console.log(clientes)
}