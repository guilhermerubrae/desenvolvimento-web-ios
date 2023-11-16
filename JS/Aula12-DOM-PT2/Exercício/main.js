let botao = document.getElementById("B_01");

botao.style.border = 'solid 2px #D9BC66';
botao.style.padding = '.5rem';
botao.style.margin = '.7rem';
botao.style.backgroundColor = '#BFBFBF'


botao.addEventListener("click", () => {
    let imagem = document.createElement("img");
    imagem.src = "img/UA.jpg";
    imagem.alt = "The Umbrella Academy";
    document.body.appendChild(imagem);
});


  
  function solicitarNome() {
    // prompt
    const nome = prompt("Digite seu nome:");
  
    //  usuário clicou em OK
    if (nome !== null) {
      const mensagem = document.createElement("p");
      mensagem.textContent = `Olá ${nome}, bem-vindo à nossa academia`;
  
      // Inserção da mensagem
      document.body.appendChild(mensagem);
    }
  }
  
  function exibirTabuada() {
    // Solicitação do número via prompt
    const numero = prompt("Digite um número para ver a tabuada:");
  
    // Verifica se o usuário clicou em OK e exibe a tabuada
    if (numero !== null) {
      const resultado = document.createElement("p");
      resultado.textContent = `Tabuada do ${numero}:\n`;
  
      for (let i = 1; i <= 10; i++) {
        const linha = `${numero} x ${i} = ${numero * i}\n`;
        resultado.textContent += linha;
      }
  
      // Insere a tabuada abaixo do botão
      document.body.appendChild(resultado);
    }
  }