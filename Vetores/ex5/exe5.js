function exe5(){
   var i = 0
   var linguagem = []
   while (i < 10){
      linguagem.push(Number(prompt("Digite a matricula dos alunos de linguagem: ")))
      i++
   }
   var logica = []
    while (i < 15){
      logica.push(Number(prompt("Digite a matricula que cursam lógica: ")))
   }
   var interse = []
   var i = 0

   for (i = 0; i < 15; i++){
      // recupera a posição do elemneto da linguagem presente no vetor lógica
      var posicao = logica.indexOf(linguagem[i])
      if (posicao != -1){
         interse.push(logica[posicao])
      }
   }
   console.log(`Alunos presentes nas duas disciplinas - ${interse}`)
}