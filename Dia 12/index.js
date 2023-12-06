let nomes = []
let senhas = []
let cadastrados = []
let contador = 0
let continuar = true


function encontrarIndice(nome){
    for(i=0 ; i<nomes.length; i++){
        if(nomes[i]=== nome ){
            return i;
        }
        return -1;
    }

}

while(continuar){

    let opcao = prompt("O que deseja fazer :"+"\n1 - Cadastro; \n2 - Login ; \n3 - Excluir Cadastro; \n4 Encerrar Programa .  ")



    switch(opcao){
        case "1":
            let cadastrarNome = prompt("Digite o Nome que Deseja: ")
            let cadastrarSenha = prompt("Digite a senha que deseja: ")
            nomes[contador] = cadastrarNome
            senhas[contador] = cadastrarSenha
            contador++
            console.log("Cadastrado login: "+nomes+" - senha : "+senhas)
            break
        case "2":
            let login = prompt("login: ")
            let senha = prompt("Senha: ")
            let loginValido = false
            for (let i =0 ; i < nomes.length;i++){
                if(login === nomes[i] && senha == senhas[i]){
                    loginValido = true 
                    break;
                } 
            }
                    
            if(loginValido == true){
                alert("Login feito com sucesso , Bem Vindo !")
                        
        
            }else{
                        
                alert(" TEM ALGO ERRADO AIII!") }
            break;
        
        
        
        case "3":
            let excluirNome = prompt("Digite o nome que deseja excluir: ")

            const indiceExcluir = encontrarIndice(excluirNome);
        //splice usado para remover item ex: array.splice(inicio, quantidadeParaRemover, item1, item2, ...)
           if(indiceExcluir !== -1){
                nomes.splice(indiceExcluir,1)
                senhas.splice(indiceExcluir,1)
                alert("User excluído com sucesso.");
           }else{
            alert("Nenhum user encontrado !!! :( ")
           }break;
        
        case "4":
            continuar = false
            break;
        
        default:
            alert("Opção inválida.");
            break;
        
    
    
        }
        
          
            
 }


       