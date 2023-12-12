
let nome
let salario


function dados(){
   
    nome = prompt("Qual e seu nome: ") 
    salario = Number(prompt("Qual seu salario: "))
    calcularAumento(nome,salario)


}

function calcularAumento(nome,salario){
    var aumento = 0 

    if(salario <= 1500){
        aumento = 0.20;
    }else if(salario <= 2000){
        aumento = 0.15
    }else if (salario <= 3000){
        aumento = 0.1
    }else{
        aumento = 0.5
    }
    var novoSalario = salario + (salario*aumento);
    //exibindo os resultado

    console.log(`Ola ${nome} , seja bem vindo ! `)
    console.log(`Salario: ${salario}`)
    console.log("Aumento : "+(aumento*100)+ " %")
    console.log(`Seu salario reajustado : ${novoSalario}`)
}

function perguntarNovamente(){
    let perguntar = prompt("Deseja calcular novamente ? (s/n)")

    if(perguntar === "s"){
        dados();
    }else{
        alert("programa encerrado !!!!")
    
    }

}