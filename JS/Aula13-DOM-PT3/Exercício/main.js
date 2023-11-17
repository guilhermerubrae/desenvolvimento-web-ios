function calcularNovoSalario() {
  var salario = document.getElementById("salario").value;
  var aumento = salario * 0.17;
  var reajuste = 215;
  var novoSalario = Number(salario) + aumento + reajuste;
  document.getElementById("resultado").innerHTML = "O novo salário é R$ " + novoSalario;
}