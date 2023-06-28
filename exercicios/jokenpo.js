
let lista = ['pedra', 'papel', 'tesoura']

const jogador = process.argv[2]
const jogador2 = lista[Math.floor(Math.random() * lista.length)]


console.log("CPU:", jogador2)

if (jogador === "pedra") {
    if (jogador2 === "tesoura") {
        console.log("Pedra quebra tesoura. Voce venceu");
   } else if (jogador2 === "papel"){
        console.log("Papel envolve a Pedra. CPU venceu");
   } else if (jogador2 === "pedra") {
        console.log("Empate");
   }

}
else if (jogador === "tesoura") {
   if (jogador2 === "pedra") {
    console.log("Pedra quebra tesoura. CPU venceu");
   } else if (jogador2 === "papel"){
    console.log("tesoura corta papel. Voce venceu");
   } else if (jogador2 === "tesoura") {
    console.log("Empate");
   }
}

else if (jogador == "papel"){
   if (jogador2 == "pedra") {
        console.log("Papel envolve pedra. Voce venceu");
   }else if (jogador2 === "tesoura") {
        console.log("Tesoura corta papel. CPU venceu");
   }else if (jogador2 === "papel")  {
        console.log("Empate");
   }

}


