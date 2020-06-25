function ex6(){
    var codigo 
    var vista = 0
    var prazo = 0
    var contador 
    var preco 
    for (var contador = 1; contador <= 5; contador++){
        codigo = prompt("Informe V para Vista e P para Prazo")
        preco = Number(prompt("Informe preco"))
        switch(codigo){
            case 'V': vista = vista + preco 
                break
            case 'P': prazo = prazo + preco
                break
        }
    }
    console.log(`valor total a vista ${vista}`)
    console.log(`valor total a prazo ${prazo}`)
    console.log(`valor total ${vista + prazo}`)
    console.log(`valor da primeira parcela ${prazo / 3}`)
}