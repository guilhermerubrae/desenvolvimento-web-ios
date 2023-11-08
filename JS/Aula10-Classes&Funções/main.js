class celular {
    constructor(marca, modelo, cor, memoria, memoriaRam) {
      this.marca = marca;   // Atributo
      this.modelo = modelo;
      this.cor = cor;
      this.memoria = 0;
      this.memoriaRam = memoriaRam ;
      this.isDesligando = false
  }
  
  retornoMarcaModelo
  
  ligar(){  // Metodo
      console.log("Ligando...")
  }
  
  desligar(){
      if(this.isDesligando === true){
          return `Desligando......`
      }else{
          return `Não vou desligar seu bostinha`
      }
      console.log("Desligando....")
  }
  
  pesquisa(){
          console.log("Pesquisando.....")
      }
  
  }
  
  console.log(celular)
  
  // criar uma copia daquilo que já existie, instanciar uma classe
  var motorola = new celular("amarelo","Nokia 1986","32GB","4GBRAM","3600KF");
  console.log(motorola)
  console.log(motorola.desligar())
  
  var positivo = new celular ("Positivo", "Twist4", "BlackYellowed", 8, "256Mb")