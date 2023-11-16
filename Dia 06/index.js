let valor = parseInt(prompt("Escolha um numero: "))

for(contador = 0; contador <= valor; contador++){
    console.log("O contador e : "+contador)
}

for (contador = 0; contador <=50; contador+=5){
    console.log("Contador 1  : "+contador)
}

for (contador = 50; contador >=0; contador-=5){
    console.log("Contador 2 : "+contador)
}

let num = Number(prompt("Escolha um numero que  deseja : "))

for(let i = num ; i <= num +2 ;i++){
    console.log("tabuada do numero: "+i)
    for(let contador=0;contador <= 10; contador++){
        console.log(i+" x "+contador+" = "+i*contador)
    }
} 