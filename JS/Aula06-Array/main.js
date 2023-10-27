// Array unidimensional colchetes separando linhas e virgulas
var numeros = [54, 111, 58, 853, 17, 75, 30];
console.log(numeros);
//Array bidimensional colchetes separando linhas e virgulas
const series = [
    ['GOT', 2015, 10],
    ['ANNE WITH "E"', 2015, 10],
    ['SENSE 8', 2018, 10]     //3 Dimensões = 3 Linhas
]
//Quando bi deve-se chamar a var com colchetes e o indice line e column
console.log(series);
console.log(series[2][2]);
console.log(series[0][3]);

console.log('ANTES: ' + series[2][0]);
series[2][0] = 'ELITE'; // TROCANDO O VALOR DO ARRAY
console.log('DEPOIS: ' + series[2][0]);

// Metódos: 

// CONVERTENDO O ARRAY EM STRING 
// Para ser visivel chamar no console o nome da nova var transformadora
console.log(typeof series);
let transformSeries = series.toString()
console.log(typeof transformSeries);

// Converte o array para colocar uma separação da escolha do dev
let transformCaractersSeries = series.join(' _|*&*|_ ');
console.log(transformSeries);

// MOSTRA O TAMANHO DO ARRAY
console.log(transformSeries.length);

// Método .pop exclui somente o último elemento do array
let deleteSeries = series.pop()
console.log(series);
console.log(deleteSeries);

// Método .push insere uma nova inf último elemento do array
let pushSeries = series[0].push('Kiwi')
console.log(series);
console.log(pushSeries);

// Método .shift exclui somente o primeiro elemento do array
let shiftSeries = series[1].shift()
console.log(series);
console.log(shiftSeries);

// Método .unshift add somente no primeiro elemento do array
let unshiftSeries = series[1].unshift('Kiwi')
console.log(series);
console.log(unshiftSeries);

// Deletando um índice especifico pra funcionar tem que excluir o .pop acima
delete series[2][2];
console.log(series);