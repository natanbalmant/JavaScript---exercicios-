function calcula() {
    var nota1 = document.getElementById("nota1").value;

    var nota2 = document.getElementById("nota2").value;

     var nota1 = Number(nota1)
     var nota2 = Number(nota2)
    
    var media = (nota1 + nota2)/2 

    if (media < 3){
        document.write("Aluno reprovado!" + media )
    }
        else if ((media >= 3)&&(media < 7)){
            document.write("Aluno para exame" + media)
        }
            else {
                document.write("Aluno aprovado!" + media)
            }


    document.getElementById("media").innerHTML = media.toFixed(2)
}