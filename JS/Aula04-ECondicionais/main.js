// && E / || OU // ! NEGAÇÃO
// && TEM QUE SER VERDADEIRO TODAS
// || UMA TEM QUE SER VERDADEIRO PARA DAR VERDADEIRO OU VICE E VERSA
// IF SITUAÇÃO V
// ELSE F NEGAÇÃO
// === &&
//IF(){} / ELSE
// SE  UM OPERADOR LÓGICO ESTIVER EM PRIMEIRO NA VAR O BROWSER LÊ O PRIMEIRO OPERADOR ELE TRANFORMA O VALOR DA VAR
// BROWSER LÊ DE FORMA PROCEDURAL
// programa vai ler primeiro operadores de comparação depois lógicos
let = pizzaGrande = true
let = pizzaPequena = false
if(pizzaGrande == false && pizzaPequena == true) {
    console.log('Você escolheu uma pizza tamanho pequeno')
}
if(pizzaGrande == true  && pizzaPequena == false) {
    console.log('Você escolheu uma pizza tamanho grande')
}
if(pizzaGrande == true || pizzaPequena == false) {
    console.log('Você escolheu uma pizza')
}
console.clear()
let number1 = 11
let number2 = 10
if(number1 > number2){
    console.log('Numéro 1 é maior que múmero 2')
}
if(number1 == number2){
    console.log('Numéros iguais')
}
if(number1 != number2){
    console.log('Numéros diferentes')
}
console.clear()
//negação
let teraComidaTOTVS = true
if(!teraComidaTOTVS == true){
console.log("vai ter")
}
else{
    console.log("não terá")
}
console.clear()
// ${number} chama a var e já espaça o que estiver ao redor (template string)
// else if parecido com elif do py
let number = 10
if (number % 2 == 0){
    console.log(`Número ${number} Par`)
}
else{
    console.log("Número" + ' ' + number + ' ' + "Impar")
}
// sem valor
let morangoMaduro = null
if(morangoMaduro == true){
    console.log('está maduro')
}
else if(morangoMaduro == false){
    console.log('Não está maduro')
}
else{
    console.log('Indefinido')
}
'Outono, Verão, Inverno, Primavera'
'Janeiro, Fevereiro, Março, Abril, Maio, Agosto, Abril, Setembro, Outubro, Novembro, Dezembro'
let mes = 'Dezembro';
let estacoes = 'Verão'
if(mes == 'Dezembro'){
    console.log(`Esse mês ${mes} é referente a ${estacoes}`)
}
// Math. () biblioteca do js
// ifs aninhados
console.clear();
let incrição = true;
let fase1 = 70;
let fase2 = 70;
let fase3 = true;

if(incrição == true){
console.log('Você está na fase 1')
   if(fase1 >= 70){
     console.log('Você passou e está na fase2')}
      else if(fase2 >= 65 || fase2 <= 69){
        console.log('Você terá uma nova oportunidade de passar na fase2')
   }
   else{
    console.log('Você não passou')
   }
}
else{
    console.log('Você não passou')
}

let pipoca1 = 56
let pipoca2 = 50

if(pipoca1 > pipoca2){
    console.log('maior')
}
else{
    console.log('menor')}
//operador ternário

pipoca1 > pipoca2 ? console.log(pipoca1 + 'é maior') : console.log(pipoca1 + 'é menor');
console.clear();
//'Janeiro, Fevereiro, Março, Abril, Maio, Agosto, Abril, Setembro, Outubro, Novembro, Dezembro'
//não declarei o let pois já foi declarado lá em cima
mes = 3

switch(mes){
    case mes == 3:
        console.log('Março')
        case mes == 4 :
        console.log('Abril')
        case mes == 5 :
        console.log('Maio')
        case mes == 6 :
        console.log('Agosto')
        case mes == 7 :
        console.log('Abril')
        case mes == 8 :
        console.log('Setembro')
        case mes == 9 :
        console.log('Outubro')
}

if(mes == 4){
    console.log(`Esse number ${mes} é referente a Abril`)
}











