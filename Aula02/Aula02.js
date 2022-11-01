console.log("Aula02");
function alert(message? any): void;

alert("Boas vindas a aula02");

// -------------------------------------------------------------
let escolhaUsuario = confirm("Deseja Realmente Sair?") //Retorna booleano

console.log(escolhaUsuario);

if (escolhaUsuario) {
    alert("Saiu da Sessão")
} else {
    alert("...Continua na sessão")
}

// -------------------------------------------------------------
let valorRecebido = prompt("Informe seu nome", "informação padrão")
console.log(valorRecebido);

let valorA = 10;
let valorConvertido = parseInt(valorRecebido);
let resultado = valorA + valorRecebido;
alert(resultado);

// -------------------------------------------------------------
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);