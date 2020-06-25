function calcula() {

    var fixo = Number(document.getElementById("fixo").value)

    var vendas = Number(document.getElementById("vendas").value)

    var comissao = ((vendas * 4) / 100)

    var final = fixo + comissao

    document.getElementById("comissao").innerHTML = `R$ ${comissao.toFixed(2)}`
    document.getElementById("final").innerHTML = `R$ ${final.toFixed(2)}`

}

