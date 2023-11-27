let nome = prompt("Qual e seu nome ? ")
let idade = parseInt(prompt("Qual e a sua idade : "))
let peso = parseInt(prompt("Qual e o seu peso : "))
let altura = parseFloat(prompt("Qual e a sua altura: "))
let profissao = prompt("Qual e a sua profissao  ? ")

console.log(`Ola ${nome} , tem  ${idade} anos  , trabalha como ${profissao} , tem  ${altura} de altura e pesa  ${peso} Kg `)
//verifcando se o usuario pode ou nao tomar uma Gelada :D
if( idade < 18){
    console.log ("Voce e menor de idade , nao esta liberado para tomar um Gelada !!!")
}else{ console.log("Voce e maior de idade , esta liberado para tomar uma Geladinha :) ")}

//Fracionando o a idade do usuario ! 

let meses = idade * 12
let semana = idade * 52
let dias = idade * 365 

console.log(" sua idade em meses eh : "+meses)
console.log(" sua idade em semana  eh : "+semana)
console.log(" sua idade em dias eh : "+dias)

let imc = peso /(altura*altura)

if(imc < 18.5){
    console.log("Seu imc eh de: "+imc+"kg/m2 ou seja -> Magreza !!")
}else if ( imc >= 18.5 && imc <= 24.9){
    console.log("Seu imc eh de: "+imc+"kg/m2 ou seja -> Normal !!")
}else if(imc >= 24.9 && imc <= 30){
    console.log("Seu imc eh de: "+imc+"kg/m2 ou seja -> Sobrepeso !!")
}else{ console.log("Obesidade  mano :( ")}


let anoATual = 2023

let nascimentoDoUsuario = anoATual - idade

console.log ("Voce nasceu no ano de "+nascimentoDoUsuario)


let idadeAtual = 0 

for(let contador = nascimentoDoUsuario; contador <= anoATual; contador++){
    console.log(contador+ " - " +idadeAtual+ " anos de idade")
    idadeAtual++

}




// AGORA IREMOS FAZER O PROGRAMA DE RH :) 
let confirmar = "n"
let oSalario = 0

while (confirmar !="s"){
    let oNome = prompt("Qual e seu nome ? ")
    let aIdade = parseInt(prompt("Qual e a sua idade : "))
    oSalario = Number(prompt("Qual é o seu salário?"));
    console.log("nome: "+oNome+" ,idade: "+aIdade+",salario: "+oSalario)
    confirmar= prompt("as informacoes estao corretas ? (s/n) ")
}

// fazendo a previsao salarial 

let aumento = 0.015
console.log("Previsao salarial para os proximos 10 anos ")

for(let ano = 1 ; ano <= 10 ; ano++){
    oSalario += oSalario * aumento
    aumento *= 2

    console.log((2023+ano)+ " = R$" +oSalario.toFixed(0))
}