function exe1(){
    var a, b, c, d 
    var grupo = 0
    while (grupo < 5){
    a = Number(prompt("Informe um numero"))
    b = Number(prompt("Informe segundo numero"))
    c = Number(prompt("Informe terceiro numero"))
    d = Number(prompt("Informe quarto numero"))
  
    // ordenacao crescente
    var troca
    var contador = 0
    while (contador < 4){
        if (a > b){
            troca = a
            a = b
            b = troca
        }
        if (b > c) {
            troca = b
            b = c
            c = troca
        }
        if (c > d){
            troca = c
            c = d
            d = troca
        }
        contador ++
    }
    alert(`Ordem crescente: ${a} ${b} ${c} ${d}`)
    alert(`Ordem crescente: ${d} ${c} ${b} ${a}`)
    grupo ++
} 
    

}