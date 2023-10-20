// var
var serie1= 'Anne With An E';
var serie2= 'Game Of Thrones';
console.log(serie1 + " " + serie2);

// templete string
console.log(`${serie1} + texto aleatório que contabiliza espaço ${+ serie2}`);
// console.log(`${num1 + num2}`); //numericos

console.clear();

const string01 = 'Instituto da Oportunidade';
console.log('Exemplo: ' + string01.charAt(10));
console.log('Exemplo: ' + string01.length);
console.log('Exemplo: ' + string01.toUpperCase());
console.log('Exemplo: ' + string01.toLowerCase());
console.log('Exemplo: ' + string01.substring(10,25) + ' ' + string01.substring(0,9));
console.log('Exemplo: ' + string01.substring(13))

console.clear();

let mensagem = 'Game of Thrones';
console.log(mensagem);

let novaMensagem = mensagem.replace('Game', 'Thrones');
console.log(novaMensagem);