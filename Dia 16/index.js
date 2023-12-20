let nomes = []
let senhas = []

//funcao para pedir uma opcao ao usuario
function solicitarOpcao(){
    let opcao = prompt("O que deseja fazer :"+"\n1 - Cadastro; \n2 - Login ; \n3 - Excluir Cadastro; \n4 Encerrar Programa .  ")
    return opcao

}
//funcao para cadastrar um usuario 
function cadastrar(){
    nomes.push(prompt("Digite seu Nome: "))
    senhas.push(prompt("Digite sua Senha: "))

}

//funcao para fazer o login 

function fazerLogin(nome , senha){
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] == senha){
        return true
    }else{
        return false
    }

}

//funcao para exlcuir um cadastro: 

function exlcuirCadastro(nome){
    let indice = nomes.indexOf(nome)
    if(indice !== -1){
        nomes.splice(indice,1)
        senhas.splice(indice,1)
        console.log("USUARIO REMOVIDO COM SUCESSO!")

    }else{
        console.log("USUARIO NAO ENCONTRADO !!!! ")

    }
}

let continuar = true
let nome
while (continuar){
    let opcao = solicitarOpcao()

    switch(opcao){
        case "1":
            cadastrar()
            break;
        case "2":
            nome = prompt("Digite seu Nome: ")
            let senha = prompt("Digite sua Senha: ")
            let login = fazerLogin(nome,senha)
            if(login){
                console.log("login feito com sucesso !!! ")
            }else{
                console.log("nome ou senha incorreto !! ")
            }break;
        case "3":
            nome = prompt("digite seu nome:")
            exlcuirCadastro(nome);
            break;
        case "4":
            continuar = false
            break;
        default:
            console.log("opcao invalida prog encerrado !!! ")
            break;

    }

}