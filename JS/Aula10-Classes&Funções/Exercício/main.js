class contaBancaria{
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }

    contaPoupança(){
       return this.salario - 1.5
    }
    
    contaCorrente(){
        return this.salario - 3.6
    }

    contaEstudante(){
        return this.salario - 1.2
    }
}

var funcionaria = new contaBancaria('Anna', '19', 750, 'Feminino', '158', '96721', 'contaCorrente')
console.log(funcionaria)
console.log(funcionaria.contaEstudante())