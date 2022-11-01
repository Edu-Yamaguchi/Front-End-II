// FOR IN = percorre objetos

function estudandoArrays(){

let usuarios = {
    nome: "Eduardo Cotrim Yamaguchi",
    idade:"18",
    endereco:{
        rua: "Rua tal",
        numero: 389,
        bairro:"Lagos de Shanadu"
    }
}
//alert(usuarios.endereco.rua);

for (let propriedade in usuarios){
    console.log(usuarios[propriedade]);
}

// FOR OF = percorre Arrays

let arrayAlunos = ["Mario", "Luigi", "Bowser"];

arrayAlunos.push("Peach", "Toad");
console.log(arrayAlunos);

for(i = 0; i < arrayAlunos.length; i++) {
    console.log(arrayAlunos[i]);
}

for (let aluno of arrayAlunos){
    console.log(aluno);
}
// FOREACH = Pode usar function

arrayAlunos.forEach(function(aluno){
    console.log(aluno);
});

// ARROW
arrayAlunos.forEach(aluno => {console.log(aluno);});
}

export default function estudandoArrays();