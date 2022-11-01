let escolhaJogador = parseInt(prompt("Digite 0-Pedra, 1-Papel ou 2-Tesoura"));

let numeroMaquina = parseInt(Math.random() * 3);

// Número aleatório da máquina

if (numeroMaquina === 0){
    numeroMaquina = "Pedra";
} else if (numeroMaquina === 1){
    numeroMaquina = "Papel";
} else if (numeroMaquina === 2){
    numeroMaquina = "Tesoura";
}


if (escolhaJogador === 0){
    escolhaJogador = "Pedra";
} else if (escolhaJogador === 1){
    escolhaJogador = "Papel";
} else if (escolhaJogador === 2){
    escolhaJogador = "Tesoura";
}

alert("O jogador escolheu: " + escolhaJogador);
alert("A máquina escolheu: "+ numeroMaquina);

// Condições de vitória

if (escolhaJogador === "Pedra"){
    if (numeroMaquina === "Pedra"){
        alert("Empatou");
    } else if (numeroMaquina === "Papel"){
        alert("A máquina Ganhou");
    } else {
        alert("O jogador Ganhou")
    }
}
if (escolhaJogador === "Papel"){
    if (numeroMaquina === "Papel"){
        alert("Empatou");
    } else if (numeroMaquina === "Tesoura"){
        alert("A máquina Ganhou");
    } else {
        alert("O jogador Ganhou")
    }
}
if (escolhaJogador === "Tesoura"){
    if (numeroMaquina === "Tesoura"){
        alert("Empatou");
    } else if (numeroMaquina === "Pedra"){
        alert("A máquina Ganhou");
    } else {
        alert("O jogador Ganhou")
    }
}




let ganhador = 0;

if (ganhador === 2) {
    alert("Parábens você ganhou")
};