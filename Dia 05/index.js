let numero1 = Number(prompt("Escolha um numero de 1 a 10 : "))
let numero2 = Number(prompt("Escolha outro numero  de 1 a 10 : "))
let opcao = prompt (" Agora escolha qual operacao matematica deseja fazer com esses numeros , dividir , somar , subtrair , multiplicar , escolha uma : ")
switch(opcao){
    case "dividir":
        console.log (numero1/numero2)
        break;
    case "somar":
        console.log (numero1+numero2)
        break; 

    case "subtrair":
        console.log (numero1-numero2)
        break;


    case "multiplicar":
        console.log (numero1*numero2)
        break;




 }
 console.log("AGORA VAMOS PARA O DESAFIO 2 !")

let valor
let quantidade


let tipo = prompt("Bem vindo ao nosso posto de gasolina, escolha como deseja abastecer: "+"\n1 -gasolina; \n2 - alcool;   \n3 - calibrar os pneus : ")

 switch(tipo){
    case "1":
        valor = parseInt(prompt("Digite a quantidade que deseja abastecer : "))
        quantidade = valor/5
        console.log("Foram abastecidos "+quantidade+"Litros de Gasolina , obrigado volte sempre")
        break;

    case "2":
        valor = parseInt(prompt("Digite a quantidade que deseja abastecer : "))
        quantidade = valor/3
        console.log("Foram abastecidos "+quantidade+" Litros de Alcool , obrigado volte sempre")
        break;

    case "3":
        
        
        console.log("Pneus calibrados com sucesso ! :) ")
        break;







 }
