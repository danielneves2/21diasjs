
//Tabela com nomes e notas + media da turma .

let alunos = []
let notas = []
let continuar = true
let contador = 0

while(continuar){
    let nome = prompt("Digite o nome do "+(contador +1)+" aluno: ")
    let nota = Number(prompt("Digite a nota do aluno: "))
    alunos[contador]=nome
    notas[contador]= nota
    contador ++
    let resposta = prompt("Deseja continuar inserindo alunos ? (s/n)")
    if (resposta === "n"){
        continuar=false
    }

}

//EXIBINDO AS INFO 

console.log("NOTAS DOS ALUNOS !!!!")

for(let i = 0 ; i < alunos.length; i++){
    console.log(alunos[i]+" - "+ notas[i])

}

let somaDasNotas = 0

for (let i = 0 ; i < notas.length; i++){
    somaDasNotas += notas[i]
}

let media = somaDasNotas / alunos.length
console.log ("A soma das notas dos alunos foi "+somaDasNotas    )
console.log("A media geral foi :"+media)



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

//ordenar por preco

for(let i = 0 ; i < valores.length -1 ; i++){
    for(let j = 0 ; j < valores.length -i -1; j++){

        let modeloMaiorValor = modelos[j]
        modelos[j] = modelos[j + 1]
        modelos[j + 1] = modeloMaiorValor


        let anoMaiorValor = anos[j]
        anos[j] = anos[j+1]
        anos[j + 1] = anoMaiorValor

        let maiorValor = valores[j]
        valores[j]= valores[j+1]
        valores[j + 1 ] = maiorValor
    }
}

console.log("Carros ordenados pelo preco :")

for (let i = 0 ; i < modelos.length; i++){
    console.log(modelos[i]+" - "+ anos[i]+" - "+ valores[i])
}