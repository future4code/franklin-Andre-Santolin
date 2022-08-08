/*function checaRenovacaoRG() {
   const anoAtual = Number(prompt("Digite o ano atual"))
   const anoNascimento = Number(prompt("Digite o ano de nascimento"))
   const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

   const idade = anoAtual - anoNascimento
   const tempoCarteira = anoAtual - anoEmissao

   const cond1 = idade <= 20 && tempoCarteira >= 5
   const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
   const cond3 = idade > 50 && tempoCarteira >= 15

   return (cond1 || cond2 || cond3)
}*/

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ) {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
}
console.log(checaRenovacaoRG(2022,1995,2014))   