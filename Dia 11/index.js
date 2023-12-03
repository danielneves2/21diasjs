



let modelos = []
let anos = []
let valores = []
continuar = true
contador = 0


while(continuar){
    console.log("Agora vamos cadastrar novos carros (Modelo , Ano , valor) ")
    let modelo = prompt("Qual o modelo do carro: ")
    let ano = (prompt("Qual e o ano do carro: "))
    let valor = parseFloat(prompt("Qual e o valor do carro: "))
    modelos[contador] = modelo
    anos[contador] = ano
    valores[contador] = valor
    contador++
    let pergunta = prompt("Voce deseja inserir algum novo carro? (s/n)")
    if(pergunta === "n"){
        continuar=false
    }

}

//Exibindo carro e seus dados

for (let i = 0 ; i < modelos.length; i++){
    console.log(modelos[i]+" - "+anos[i]+" - "+valores[i])
}

// Ordenar carros do mais barato ao mais caro
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {
            // Trocar posição nos arrays modelos, anos e valores
            let tempModelo = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = tempModelo;

            let tempAno = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = tempAno;

            let tempValor = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = tempValor;
        }
    }
}

console.log("Carros ordenados do mais barato ao mais caro:");
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}