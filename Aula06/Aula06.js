let containerFelino = document.getElementById('containerFelino');
console.log(containerFelino);

let listaFelinos = document.querySelectorAll('.item');
console.log(listaFelinos[4].parentElement);

//Remover

containerFelino.removeChild(listaFelinos[1]);
containerFelino.firstElementChild.removeChild();


let div = createElement('div');
div.classList.add('item');

let textoDiv = document.createTextNode("Aula06")
div.appendChild(textoDiv);

let novoFelino = {
    img:
    titulo:
    descricao:
}

div.innerHTML = `
    <img${}>
    <h2${}>
    <p${}>
`

containerFelino.insertBefore(div, containerFelino.children[3]);
console.log(div)