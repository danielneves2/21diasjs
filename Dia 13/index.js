class configPc {
    Tipo
    Processador
    Video
    Armazenamento
    MemorioRam
    SSD
    constructor(tipo , processador , video , armazenamento,memoriaram , ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemorioRam = memoriaram
        this.SSD =  ssd
    }

    exibirInfo(){
        console.log("EXIBINDO AS INFO DO PC . ")
        console.log(`tipo: ${this.Tipo  }`)
        console.log(`Processador: ${this.Processador  }`)
        console.log(`Video: ${this.Video }`)
        console.log(`Armazenamento: ${this.Armazenamento  } GB`)
        console.log(`Memoria Ram : ${this.MemorioRam  } GB`)
        console.log(`SSD : ${this.SSD  } `)
        


        
    }





}
    
let meuPC = new configPc("Computador","i5","Integrado",1000,8,true)

meuPC.exibirInfo()


console.log("############## Proximo Exercicio ##################")

class Carro {
    Nome
    Potencia
    Velocidade
    Acelerecao 
    
    constructor(nome,potencia,velocidade,aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.Velocidade = velocidade 
        this.Acelerecao = aceleracao
    }
    calcularTempMedio (distancia){
        let resultado = distancia / (this.Velocidade/this.Acelerecao)
        return resultado
    }
}

let meuCarro = new Carro("Audi R8","200 Cavalos",200,10)


class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor
    constructor(nome,tipo,distancia){
        this.Nome = nome
        this.Tipo = tipo 
        this.Distancia = distancia
        this.Participantes = [];
        this.Vencedor = ""
    }
    definirVencedor(){
        let menorTempo = this.Participantes[0].calcularTempMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for(let i = 0 ; i < this.Participantes.length ; i++){
            let tempo = this.Participantes[i].calcularTempMedio(this.Distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[i]

                }
        }
        this.Vencedor = vencedor
        return vencedor
    }
    
    exibirVencedor(){
        alert("O vencedor e : "+this.Vencedor.Nome)
    }
}

let corrida = new Corrida("CORRIDA DO DANI", "FORMULA 1", 6000);

corrida.Participantes.push(new Carro("Kicks", 200, 100,5));
corrida.Participantes.push(new Carro("MONZA",500, 300,10));
corrida.Participantes.push(new Carro("MERCEDES", 400, 300,10));


corrida.definirVencedor()
corrida.exibirVencedor()