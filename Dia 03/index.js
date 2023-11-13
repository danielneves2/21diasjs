let nomeDoUsuario = prompt("Qual e seu nome ? ");
let idadeDoUsuario = parseInt(prompt("Qual e a sua idade: "))
let alturaDoUsuario = Number(prompt("Qual a sua altura: "))
let pesoDoUsuario = Number(prompt("Qual e o seu peso: "))

let nascimento = 2023 - idadeDoUsuario

let imc = parseInt(pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario))

console.log("Ola "+nomeDoUsuario+" voce tem "+idadeDoUsuario+" anos , nasceu em " +nascimento+", tem "+alturaDoUsuario+" de altura , pesa "+pesoDoUsuario+"kg seu IMC e "+imc+"kg/m2")