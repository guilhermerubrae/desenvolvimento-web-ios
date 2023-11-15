let meuArray = [17, 43, 8, 4, 97, 56, 29];

let resultado = meuArray.map(imparPar);

function imparPar(num) {
    if (num % 2 === 0) {
        return `Esse número ${num} é 'par'`;
    } else if (num % 2 === 1) {
        return `Esse número ${num} é 'ímpar'`;
    } else {
        return `Esse número ${num} não é par nem ímpar`;
    }
}

console.log(resultado);

const unidimensional = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

let filtroUnidi = unidimensional.filter((percorrer) => {
    return percorrer >= 20;
});

console.log(filtroUnidi);
