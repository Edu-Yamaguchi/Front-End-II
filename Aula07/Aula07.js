let textNome = document.getElementById('textNome');
console.log(textNome);

textNome.setAttribute('class', 'nova-classe'); // classList.add('nova-classe');
console.log(textNome);

let img = document.createElement('img');
img.setAttribute('src', 'http://);
document.body.appendChild(img);

img.removeAttribute('src');
img.getAttribute('class');




window.onload = function(){
    console.log('o documento está pronto');
}

BigInt.onclick = function(){
    console.log('Você clicou');
}

preventDefault() //Evitar que seja executado automáticamente	
