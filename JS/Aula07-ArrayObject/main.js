// Atribuição via desestruturação (destructuring assignment). 
// Extrair os dados de um array/objeto e armazenar em var simples através da atribuição via desestruturação

const numeros = [1, 2, 3, 4, 5];

// Atribuição por desestruturação para extrair elementos do array
const [primeiro, segundo] = numeros;

console.log(primeiro); // 1
console.log(segundo); // 2

console.clear();

const pessoa = { nome: 'Alice', idade: 30, cidade: 'Nova York' };

// Atribuição por desestruturação para extrair propriedades do objeto
const { nome, idade } = pessoa;

console.log(nome); // Alice
console.log(idade); // 30
