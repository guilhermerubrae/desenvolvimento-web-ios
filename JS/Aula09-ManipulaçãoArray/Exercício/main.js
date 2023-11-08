let meuArray = [17, 43, 8, 4, 97, 56, 29]

function imparPar(num){
    if(num % 2 == 0){
        return `Esse número ${num} é 'par'`
    }else if(num % 2 == 1){
        return `Esse número ${num} é 'impar'`
    }else{
        return `Esse número ${num} é não é par nem impar`
    }
   
   }