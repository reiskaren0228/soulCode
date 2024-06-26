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

function calcularMedia(n1, n2, n3) {
  let resultado = (n1 + n2 + n3) / 3;
  console.log(`A média é ${resultado}`);

  // Retorno = saída da função
  return resultado;
}

let mediaAluno1 = calcularMedia(7.0, 6.0, 9.0);
let mediaAluno2 = calcularMedia(8.0, 10.0, 6.0);
let mediaAluno3 = calcularMedia(4.0, 5.0, 7.0);

console.log(mediaAluno1);
console.log(mediaAluno2);
console.log(mediaAluno3);




function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

let imc1 = calcularImc(87, 1.78);
let imc2 = calcularImc(50, 1.9);
let imc3 = calcularImc(78, 1.75);

let mediaImc = calcularMedia(imc1, imc2, imc3);
console.log(mediaImc);
