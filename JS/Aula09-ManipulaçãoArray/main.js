// Método forEach()
const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);
function minhaFuncao(item, index) {
console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
}
//se tirar o indice  ou o item aparece apenas valores as frutas
// agora se deixar os dois parametros e matar o c.log(item)
// for each n aplica a lógica em campos vazios
// nomedoarray . foreach()

// Método map()

// percorre e aplica alterações
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.clear();
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);
//novo array mostra a a raiz quadrada

// Outro exemplo do map
console.clear();
const tarefas = [
    { texto: 'Lavar a louça', isCompleted: true },
    { texto: 'Limpar o quarto', isCompleted: false },
    { texto: 'Fazer o jantar', isCompleted: true },
  ];
  
const mapText = tarefas.map((valor) => {
return valor.texto;
});
//Imprime o novo array
console.log(mapText);

// Método .filter
console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
return idade >= 18;
});
console.log(filtroIdade);
// filter coloca uma condição tipo somente números pares

// Outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => {
return item.isCompleted === true;
});
console.log(filtoCompletas);

// Método find()
console.clear();
const meuArray = [
{ nome: 'apples', quantidade: 2 },
{ nome: 'bananas', quantidade: 0 },
{ nome: 'cerejas', quantidade: 5 },
{ nome: 'cerejas', quantidade: 57 },
];
console.log(
meuArray.find((fruta) => {
return fruta.nome === 'cerejas';
})
);
//vai retornar apenas o primeiro valor que ele acha o filter imprimirá os dois
