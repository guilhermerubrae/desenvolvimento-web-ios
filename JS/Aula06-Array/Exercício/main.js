//Array Unidimensional
const arrayInformacoes = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

console.log("Array completo:", arrayInformacoes);
console.log("Tamanho do Array:", arrayInformacoes.length);

const informacaoJS = arrayInformacoes[arrayInformacoes.indexOf("JS")];
console.log("Informação 'JS':", informacaoJS);

const arrayAsString = arrayInformacoes.join(",");
console.log("Tipo da String resultante:", typeof arrayAsString);

const arrayAsStringComSeparadorModificado = arrayAsString.replace(/,/g, "/");
console.log("Array com separador modificado:", arrayAsStringComSeparadorModificado);

arrayInformacoes.unshift("IOS");
console.log("Novo Array com 'IOS' no início:", arrayInformacoes);
console.log("Tamanho do Array atualizado:", arrayInformacoes.length);

//Array Bidimensional

const arrayBidimensional = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
  ];
  
  console.log("Array completo:", arrayBidimensional);
  console.log("Número de linhas do Array:", arrayBidimensional.length);
  
  const ano2013 = arrayBidimensional[2][1];
  console.log("Ano 2013:", ano2013);
  
  arrayBidimensional[1][2] = "JavaScript";
  console.log("Array com 'JavaScript':", arrayBidimensional);
  
  arrayBidimensional[2].splice(2, 2);
  console.log("Array com 'Java' removido:", arrayBidimensional);
  
  arrayBidimensional.push(["pipoca"]);
  console.log("Array com 'pipoca' no final:", arrayBidimensional);
  

