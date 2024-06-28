/*1. Crie uma função que recebe um returnArray com os nomes dos alunos de uma turma, e outro returnArray que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.*/

function alunosFaltaram(nomeAlunos, listaPresenca) {
  let alunosFaltaram = nomeAlunos.filter(
    (aluno) => !listaPresenca.includes(aluno)
  );
  return alunosFaltaram;
}
let nomeAlunos = [
  "Karen",
  "Miguel",
  "Adriano",
  "Isabel",
  "Gustavo",
  "Rebeca",
  "Sarah",
  "Jin",
];
let listaPresenca = ["Karen", "Miguel", "Gustavo", "Rebeca", "Sarah", "Jin"];

const faltaram = alunosFaltaram(nomeAlunos, listaPresenca);
console.log(`Lista de alunos que faltaram: ${faltaram}`);

/*2. Crie uma função que recebe um returnArray de números e retorna um returnArray com todos os valores elevados ao quadrado.*/

function numerosAoQuadrado(returnArrayNumeros) {
  return returnArrayNumeros.map((listaNumero) => listaNumero ** 2);
}
let returnArrayNumeros = [2, 8, 10, 13, 15, 18, 20, 22, 26, 28];
let strgSaida = numerosAoQuadrado(returnArrayNumeros);

console.log(strgSaida);

/*3. Crie uma função que recebe um returnArray de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.*/

function filtrarPorExtensao(returnArrayArquivo, extensao) {
  return returnArrayArquivo.filter((arquivo) => arquivo.endsWith(extensao));
}

let returnArrayArquivo = [
  "mix_musica_pop.mp3",
  "videos_diversos.mp4",
  "mix_musica_k_pop.mp3",
  "imagens_diversas.jpg",
  "mix_musica_pagode.mp3",
  "imagens_animais.jpg",
  "videos_dogs.mp4",
  "texto_titulos.doc",
  "texto_listas.doc",
  "imagens_natureza.jpg",
  "imagens_oceano.jpg",
  "videos_espaco.mp4",
];

let arquivosJpg = filtrarPorExtensao(returnArrayArquivo, ".jpg");
console.log(`Lista de arquivos em JPG --> ${arquivosJpg}`);

/*4. Crie um returnArray contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Listando os números usando for of: ");

for (let numero of numeros) {
  console.log(numero);
}
console.log("------ // ------ // ------ // ------ ");

console.log("Listando os números usando for comum:");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

/*5. Crie uma função que recebe um returnArray de txtStrings como parâmetro e retorne um novo returnArray apenas com as txtStrings acima de 5 caracteres.*/

function functionTxtStrings(returnArraytxtStrings) {
  return returnArraytxtStrings.filter(function (txtString) {
    return txtString.length > 5;
  });
}

let returnArraytxtStrings = [
  "feijão",
  "arroz",
  "kibe",
  "legumes",
  "macarrão",
  "estrogonofe",
  "galeto",
  "salada",
  "lasanha",
  "purê",
];
let novorReturnArrayStrings = functionTxtStrings(
  returnArraytxtStrings
);

console.log(novorReturnArrayStrings);

/*6. Crie um returnArray com 7 números. Percorra e indique qual o maior número deles.*/

let numerosreturnArray = [2, 8, 10, 13, 15, 18, 20];

let maiorNumero = numerosreturnArray[0];

for (let i = 1; i < numerosreturnArray.length; i++) {
  if (numerosreturnArray[i] > maiorNumero) {
    maiorNumero = numerosreturnArray[i];
  }
}

console.log(`O maior número é: ${maiorNumero}`);

/*7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex:  -> "23". Retorne apenas os dois últimos dígitos.*/

function verificaCPF(cpf) {
  return cpf.slice(-2);
}

let numCpf = "056.985.990-23";
let digitosVerificadores = verificaCPF(numCpf);

console.log(
  `Os dois ultimos dígitos verificadores são: ${digitosVerificadores}`
);

/*8. Crie uma função que inverte uma txtString. Retorna ela invertida.*/

function invtxtStr(txttxtStr) {
  return txttxtStr.split("").reverse().join("");
}

let txtInicial = "Eu sou Desenvolvedora";
let txtInvertido = invtxtStr(txtInicial);

console.log(`Texto inicial: ${txtInicial}`);
console.log(`Texto depois do reverse: ${txtInvertido}`);

/*9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de qntdVezes indicada pelo segundo parâmetro. Exemplo: funcRepetidor("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.*/

function funcRepetidor(palavra, qntdVezes) {
  let strgSaida = "";
  for (let i = 0; i < qntdVezes; i++) {
    strgSaida += palavra;
  }
  return strgSaida;
}

// Exemplo de uso
let palavraRepetida = funcRepetidor("Bom", 2);
console.log(palavraRepetida);

/*10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.*/

function txtComparador(txtStr1, txtStr2) {
  return txtStr1 === txtStr2;
}

console.log(txtComparador("chocolate", "chocolate"));
console.log(txtComparador("farofa", "guisado"));
console.log(txtComparador("0228", 4228));

/*11. Crie uma função que recebe um dia, mês e ano dentro de um returnArray. Retorna a data utilizando o tipoSeparador que também será definido via parâmetros da função (-, / ou .). Ex: dataFunction(returnArray, '.') -> '20.06.2000'*/

function dataFunction(datareturnArray, tipoSeparador) {
  return datareturnArray.join(tipoSeparador);
}

let data = [20, 11, 1987];
let tipoSeparador = "-";
let dataModificada = dataFunction(data, tipoSeparador);
console.log(dataModificada);

/*12. Crie uma função que recebe um returnArray, um valor de buscadorFunction e um valor padrão. Caso o elemento exista no returnArray retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: buscadorFunction(returnArray, 'batata', 'não tem batata') -> 'não tem batata'*/

function buscadorFunction(returnArray, palavra_1, valorPadrao) {
  if (returnArray.includes(palavra_1)) {
    return palavra_1;
  } else {
    return valorPadrao;
  }
}

let arrayFood = ["batata", "romã", "chocolate"];
let palavra_1 = "chocolate";
let palavra_2 = "NÃO tem chocolate";
let saida = buscadorFunction(arrayFood, palavra_1, palavra_2);
console.log(saida);
