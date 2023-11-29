
let array = []
let indices = []
let contadorIndice =0 

const numeroProcurado =  parseInt(prompt("Digite o numero a ser procurado: "))

for(let i = 0 ; i < 10 ; i++){
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}: `))
    array[i]=elemento;
    
}

for (let i =0 ;i <10; i++){
    if(array[i]=== numeroProcurado){
        indices[contadorIndice]=i
        contadorIndice++
    }
}
console.log(`o numero ${numeroProcurado} foi encontrado nos indices ${indices}`);

let array2 = []

let arrayInvertido = []
let quantidade = parseInt(prompt("Digita a quantidade de numeros que deseja inserir no array : "))

for(i=0 ; i < quantidade; i++){
    let escolha5numeros = Number(prompt(`Escolha 5 numeros, numero ${i+1}: `))
    array2[i]= escolha5numeros
    
}
console.log("voce escolheu os numeros: "+array2)



let contador= quantidade -1
for(i=0 ; i < quantidade; i++){
    arrayInvertido[i]= array2[contador]
    contador--
}
console.log("esse e o famoso array invertido : "+arrayInvertido)


let numero = parseInt(prompt("Digite um numero inteiro e positivo"))
let fibonacci = []
fibonacci[0] =numero-1
fibonacci[1]=numero

for (i = 2 ; i < 10;i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]

}
console.log("fibonacci: "+fibonacci)