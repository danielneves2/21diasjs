let mediaGeral = 0
let qtdHomens = 0
let mulheresAcimaDe7 = 0
let maiorNotaHomens = 0 
let contador = 1

while(contador <=5){
    nota = parseInt(prompt("Digite a nota do "+contador+" aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f): ")

    if (sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens  = nota
        }
        qtdHomens++
    }
    if(sexo == "f" && nota > 7){
        mulheresAcimaDe7++
    }

    mediaGeral += nota
    contador ++  
    

}

mediaGeral= mediaGeral / 5

console.log ("A media geral dos alunos foi: " +mediaGeral)
console.log(" A quantidade de homens cadastrados foi"+qtdHomens)
console.log("A maior nota dos homens foi : " +maiorNotaHomens)
console.log("a quatidade de mulheres com nota acima de 7 : " +mulheresAcimaDe7)


console.log ("Agora vamos para o caixa ! " )



let saldo = 1000
let maiorValor = 0
let somaDosValoresInseridos = 0
let totalDosValoresInseridos=0
let continuar = false   

do {
    nome = prompt("Insira o seu nome: ")
    cpf = prompt("Insira seu CPF: ")
    valor = Number(prompt("Insira o valor que deseja : "))
    opcao= (prompt("Qual opcao deseja hoje ? (saque/deposito): "))
    if (valor < 0){
        console.log("Valor Invalido. transacao nao realizada . ")
    }else if (opcao == "saque"&& valor > saldo){
        console.log("Saldo insuficiente! Transacao nao realizada . ")

    }else if (opcao =="saque"){
        console.log(`Ola ${nome}  (${cpf}), seu saldo atual e R$${saldo}`)
        saldo -= valor
        totalDosValoresInseridos++
        somaDosValoresInseridos +=valor
        if(valor >maiorValor){
            maiorValor = valor
        }
        console.log(`Transacao realizada com sucesso seu saldo atual e R$${saldo}.`);
        }
    const opcao2 = prompt("Deseja continuar ? (1 para continuar e 2 para parar ): ");
    if (opcao2 == "1"){ 
        continuar = true
    }else if (opcao2 == "2"){
        continuar = false}
    else{
        console.log("Opcao invalida programa encerrado ! ! ! ! :) ")
        continuar = false
    }
        
        
}while(continuar)

console.log (`seu saldo e: R$${saldo} `)
console.log (`o maior valor inserido e: R$${maiorValor} `)
console.log (`media dos valalores inseros e : R$${(somaDosValoresInseridos/totalDosValoresInseridos)} `)
