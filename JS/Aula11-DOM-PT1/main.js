// console.log(window)
//         window.alert('É o mais brabo não tem jeito');
//         alert('iniciamos o DOM com object window');

// Criação da var e do botão
let botao = document.createElement('button');
// Esse botão deverá aparecer na boby (append = acrescenta "método")
let corpo = document.body;

document.body.appendChild(botao);

botao.innerHTML = 'COMECE AGORA';
botao.style.border = '30px solid black'

document.body.style.backgroundColor = 'blue'

