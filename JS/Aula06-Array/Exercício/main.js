//Array Unidimensional

let arrayInformacoes = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

console.log("Array completo:", arrayInformacoes);
console.log("Tamanho do Array:", arrayInformacoes.length);

let informacaoJS = arrayInformacoes;
console.log(informacaoJS[6]);

let arrayString = arrayInformacoes.toString();
console.log(typeof arrayString);

let arrayJoin = arrayInformacoes.join(' / ');
console.log("Array com separador modificado:", arrayJoin);

arrayInformacoes.unshift("IOS");
console.log("Novo Array com 'IOS' no início:", arrayInformacoes);
console.log("Tamanho do Array atualizado:", arrayInformacoes.length);

//Array Bidimensional

let arrayBidimensional = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
  ];
  
  console.log("Array completo:", arrayBidimensional);
  console.log("Número de linhas do Array:", arrayBidimensional.length);
  
  let ano2013 = arrayBidimensional[2][1];
  console.log("Ano 2013:", ano2013);
  
  arrayBidimensional[1][2] = "JavaScript";
  console.log(arrayBidimensional);
  
  delete arrayBidimensional[2][2];
  console.log(arrayBidimensional);

  let arrayPipoca = arrayBidimensional
  arrayBidimensional[2].push("pipoca");
  console.log(arrayPipoca);

