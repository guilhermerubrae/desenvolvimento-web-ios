// While - valida primeiro e depois execulet contador = 1

while (contador <= 10){
    console.log(`O número do contador é ${contador}`)
    contador *= 3;
}
console.clear();
// Decremento (cuidado com loops infinitos)
let papelada = 10;
while (papelada >= 0) {
    console.log(`O número do papelada é ${papelada}`);
    papelada--;
}
console.clear();
// Do - executa primeiro e depois valida
// Debugger executa linha por linha evitando bug
// exemplo antes de realizar um pix pergunta se quer mesmo realizar ou cancelar 
let conta = 1
do{
    debugger
    console.log(`O número do contador é ${conta}`)
    conta++;
}
while (number <= 10)

for(number = 1; number <= 10; number++){
    console.log(`O número é ${number}`)
}