for(let tabuada = 1; tabuada <= 100; tabuada++){
    console.log(`Tabuada do ${tabuada}`)
    for(let contador = 1; contador <= 10; contador++){
        console.log(`${tabuada} x ${contador} = ${tabuada * contador}`)
}}

console.clear()

// VAI FAZER UMA REPETIÇÃO 
let tabuada = 1
while(tabuada <= 10){
    console.log(`Tabuada do ${tabuada}`)
    let contador = 1
    while(contador <= 10){
        console.log(`${tabuada} x ${contador} = ${tabuada * contador}`)
        contador ++;
    }
    tabuada++;
} 

console.clear()
// Ambas as var tem que estar como escopo global para conseguir atribuir valores a si mesma
// Icremento da tabuada também deve estar fora dos laços pois queremos que se atribua o valor também
let TABUADA = 1
do{
    debugger
    console.log(`TABUADA: ${TABUADA}`)
    let CONTADOR = 1
    do{
        debugger
        console.log(`${TABUADA} x ${CONTADOR} = ${TABUADA * CONTADOR}`)
        CONTADOR++;
} while(CONTADOR <= 10);
TABUADA++;
}while(TABUADA <= 10);