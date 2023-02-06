const prompt = require('prompt-sync')();
var array_lavadoras = [];

do {
  console.log("Sistema de Cadastro de Lavadoras");
  console.log("1 - Inserir Lavadora");
  console.log("2 - Excluir Lavadora");
  console.log("3 - Listar Lavadoras");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Lavadora...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca: ");
    let cor = prompt("Digite a cor: ");
    let capacidade = prompt("Digite a capacidade: ");
    let modelo = prompt("Digite o modelo: ");

    // Neste trecho estamos declarando um objeto
    const lavadora = {
      codigo: codigo,
      marca: marca,
      cor: cor,
      capacidade: capacidade,
      modelo: modelo
    }

    // Chamar a função inserir
    inserir_lavadora(lavadora);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Lavadora...\n");
    let codigo = prompt("Digite o código da Lavadora: ");
    // Chamar a função excluir
    excluir_lavadora(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Lavadora...\n");
    // Chamar a função listar
    listar_lavadora();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_lavadora(marca) {
  // Implementar corpo da função
  array_lavadoras.push(marca);
}


function excluir_lavadora(codigo) {
  // Implementar corpo da função
  for (var j = 0; j < array_lavadoras.length; j++) {
    if (array_lavadoras[j]['codigo'] == codigo)
      array_lavadoras.splice(j, 1);
  }
}

function listar_lavadora() {
  // Implementar corpo da função
  for (var i = 0; i < array_lavadoras.length; i++) {
    c = array_lavadoras[i];
    console.log(c.codigo, ":", c.marca, "/", c.cor, "/", c.capacidade, "/", c.modelo);
  }
}