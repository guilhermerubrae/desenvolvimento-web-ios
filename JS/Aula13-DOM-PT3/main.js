// querySelector pode ser utilizado para colocar class e id
//unico é a lista de elementos o objetivo do js 
//só altera o primeiro p querySelector

var unico = document.querySelector('p');
unico.style.backgroundColor = 'blue';

//altera todos os p querySelectorAll e é possivel utilizar while e for
var selecionados = document.querySelectorAll('p');
selecionados[1].style.textAlign = 'center';
selecionados[2].style.color = 'pink';
selecionados[3].style.border = '1px solid';
selecionados[4].style.transform = 'rotate(9deg) translateX(20px)';

let contador = 0;
while(contador < selecionados.length){
    selecionados[4].style.color = 'magenta';
    contador++
};

let j = document.querySelector('.exemplo');
j.innerHTML = 'cebrutions'
j.style.backgroundColor = 'black'
j.style.textTransform = 'uppercase'
j.style.margin = '.66rem'
j.style.letterSpacing = '46px'

let y = document.querySelector('#exemplo2').style.marginTop = '166px'

function nOMe(){
    var entrada = prompt('Insira alguma coisa ae bro')
    let mostraNome = document.querySelector('#mostraNome')
    console.log(entrada)
    mostraNome.innerHTML = `Olá ${entrada}, seja Bem-Vindo`;
}

// value tem que ser declarado pra pegar o valor do nome
const mostraNome = () => {
    let mostraNome = document.querySelector('#mostraNome')
    let recebeNome = document.querySelector('#recebeNome')

    console.log(recebeNome)

    mostraNome.innerHTML = `Olá ${recebeNome.value}, Bem-Vindo`
}

let inputNameArea = document.querySelector('#recebeNome')

inputNameArea.addEventListener("keypress", (event) => {
    if(event.key == "Enter") {
        mostraNome();
    }
});
