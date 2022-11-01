let btnSubmit = document.getElementById('submit')

btnSubmit.addEventListener('click', function(event){
    event.preventDefault();
})
// ----------------------------------------------------------------
window.onload = function(){
    alert("Aoba rapa")
}
// ----------------------------------------------------------------
let btnReset = document.getElementById('reset');

btnReset.onmouseover = function(){
    btnReset.style.color = 'black'
};
btnReset.onmouseout = function(){
    btnReset.style.color = 'white'
};
// ----------------------------------------------------------------
let input = document.getElementById("asdasd"); // keychar

input.addEventListener("keydown", function(evento){
    console.log(evento.key);
})

