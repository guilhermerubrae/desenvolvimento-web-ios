for(let tabuada = 1; tabuada <= 10; tabuada++){
    console.log(`Tabuada do ${tabuada}`)
    for(let contador = 1; contador <= 10; contador++){
        console.log(`${tabuada} x ${contador} = ${tabuada * contador}`)
}}

console.clear()

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

