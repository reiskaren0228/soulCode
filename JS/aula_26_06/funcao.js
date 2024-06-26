/*
    Funções

    function nome_da_funcao(parametros) {
        // bloco de código da função
    }
*/

//Declarando uma função sem parametros chamada "Boas Vindas"

function boaVindas(params) {
  //Escopo da função
  console.log("Seja bem-vindo(a) ao meu Site!");
  console.log("!!!! |o/");
}

//Chamndo a função

boaVindas();

function exemplo_2() {
  let num_1 = 20;
  let num_2 = 28;

  console.log(`A soma dos números é ${num_1 + num_2}`);
}

exemplo_2();

//Função com Escopo Global

let num_1 = 11;
let num_2 = 5;

function exemplo_3() {
  console.log(`A soma dos números é ${num_1 + num_2}`);
}

exemplo_3();

//Função com Parametros = entrada = o que é necessário para executar a função

function soma(a, b) {
  console.log(
    `A soma dos números ${a} e ${b} da função com parametros é ${a + b}`
  );
}

soma(87, 36);
soma(20, 28);
soma(5, 11);
