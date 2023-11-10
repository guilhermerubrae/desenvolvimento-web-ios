// getElementById
let paragrafo = document.getElementById('paragrafo01');
// como já estamos dizendo que é um ID não é necessário puchar a #

paragrafo.style.color = 'magenta'
paragrafo.style.fontFamily = 'Arial bold' 
paragrafo.style.textAlign = 'center'
paragrafo.style.textTransform = 'uppercase'
paragrafo.style.transitionDuration = '10s'

// getElementsByClassName
let buscaItem = document.getElementsByClassName('item');

// for para percorrer mais de um elemento
// Percorre toda a lista e faz uma aplicação e altera posição
//var; condiç; incremento
for (let campos = 0; campos < buscaItem.length; campos++){
    buscaItem[campos].style.color = 'magenta';
    buscaItem[campos].style.transitionDuration = '10s';
}
buscaItem[1].style.color = 'red';
buscaItem[2].style.color = 'blue';
buscaItem[3].style.color = 'aqua';
buscaItem[3].style.transitionDuration = '10s';
console.log(buscaItem)

// getElementsByTag 
let acessaTag = document.getElementsByTagName('p');
console.log(acessaTag)

for (let percorrendo = 0; percorrendo < acessaTag.length; percorrendo++){
    acessaTag[percorrendo].style.backgroundColor = 'black';
    acessaTag[percorrendo].style.color = 'magenta';
    acessaTag[percorrendo].style.transitionDuration = '10s';
    acessaTag[percorrendo].style.animationName = 'fade';
    acessaTag[percorrendo].style.animationDuration = '3s';
    acessaTag[percorrendo].style.animationIterationCount = 'infinite';
}

let acessaName = document.getElementsByName('olItem');
console.log(acessaName)
// Percorre o array e altera apenas as pares
for (let p = 0; p < acessaName.length; p++){
    if (p % 2 == 0){
            acessaName[p].style.color = 'aqua';
            acessaName[p].style.transitionDuration = '10s';
            acessaName[p].style.animationName = 'fade';
            acessaName[p].style.animationDuration = '3s';
            acessaName[p].style.animationIterationCount = 'infinite';
}}

// Removendo elemento
let item2 = document.getElementById('item2')
item2.remove();

// Adicionando elemento
let lista = document.getElementById('lista');
let item5 = document.getElementById('item5');
lista.insertBefore(item2, item5.nextSibling);

let retiraEstilo = document.getElementById('retiraEstilo');
retiraEstilo.style.listStyle = 'none';