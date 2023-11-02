// Funções nome (parametros) {chaves retornar}
// Function declarada no fim pois o browser lê de forma procedural

let x = addNums(4, 5); // Chamada da função addNums
console.log(x);

let z = myFunc(4, 5); // Chamada da função myFunc
console.log(z);

function addNums(num1 = 0, num2 = 0, num3 = 0) {
 return num1 + num2;
}
function myFunc(num1, num2) {
 return num1 * num2;
}

// Arrow Function semelhante ao ternário

var validacao = (campo1 = true, campo2 = false, campo3, campo4, campo5) => {
 return campo1 && campo2 && campo3 && campo4 && campo5
};

// No console.log(vai chamar a função completa(esse parenteses chama apenas o valor))
//dentro dos parenteses pode chamar o valor dê preferência também
console.log(validacao())

const hello = () => {
 return 'Olá Arrow Function!';
};
console.log(hello())

function imparPar(num){
 if(num % 2 == 0){
     return `Esse número ${num} é 'par'`
 }else if(num % 2 == 1){
     return `Esse número ${num} é 'impar'`
 }else{
     return `Esse número ${num} é não é par nem impar`
 }

}

let recebePrimeiroNumber = imparPar(6);
console.log(recebePrimeiroNumber)

let recebeSegungoNumber = imparPar(5.75);
console.log(recebeSegungoNumber)

let contexto = 5.75 % 2;
console.log(contexto);

 
function imparPar(num){
 if(num % 2 == 0){
     return `Esse número ${num} é 'par'`
 }else if(num % 2 == 1){
     return `Esse número ${num} é 'impar'`
 }else{
     return `Esse número ${num} é não é par nem impar`
 }

}

// Objetos

const celular  = {
 marca: 'Apple',
 modelo: 'Iphone 19 Pro Max',
 cor: 'preto',
 memoria: '1TB',
 memoriaRam: '16GB'
}
console.log(celular)

console.clear();
const boasVindas = () => {
alert('Bem vindo a nossa página');
console.log('Bem vindo a nossa página');
};
const eventClique = () => {
console.log('Você clicou no botão');
};
const mouseEmCima = () => {
 console.log('Mouse está em cima do título');
 };