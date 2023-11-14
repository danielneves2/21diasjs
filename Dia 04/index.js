fome = prompt("Caro usuario voce esta com fome ? ")
din = prompt("Voce tem dinheiruus ? ")
restaurante = prompt("Voce sabe se o restaurante esta aberto  ? ")

if (fome ==="nao"||din ==="nao"){
    console.log("Hoje a janta sera em casa kkkkk")
}
else if(fome === "sim"&&din==="sim"&&restaurante==="nao"){
    console.log("Peca um delivery!")
}
else if(fome === "sim"&&din==="sim"&&restaurante==="sim"){
    console.log("Hoje o jantar sera no restaurante !!!! aee ")
}