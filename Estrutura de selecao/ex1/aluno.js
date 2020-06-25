function calcula() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;

    var n1 = Number(n1)
    var n2 = Number(n2)
    var n3 = Number(n3)
    var n4 = Number(n4)

    var media = (n1 + n2 + n3 + n4)/4

    if (media>=7) {
        document.write("Aluno Aprovado!" + media)
    }
    else {
        document.write("Aluno reprovado!" + media)
    }

    document.getElementById("media").innerHTML = media.toFixed(2)
}