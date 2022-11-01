// let titulo = document.querySelector('.titulo'); // Classe
// let titulo = document.getElementById('#titulo'); // Id

var nome = prompt('asd')
var texto = document.createTextNode("olá" + nome)
var p = document.createElement("p");
texto.appendChild(p);
document.body.appendChild(p);

console.log(p)