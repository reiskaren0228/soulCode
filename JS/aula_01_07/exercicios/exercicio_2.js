/*1. Crie uma função arrow que recebe dois números e retorna o maior deles.*/

const maiorNum = (num_1, num_2) => {
  if (num_1 > num_2) {
    return `O numero ${num_1} é maior que o numero ${num_2}`;
  } else if (num_1 < num_2) {
    return `O numero ${num_2} é maior que o numero ${num_1}`;
  } else {
    return `Os numeros ${num_1} e ${num_2} são iguais`;
  }
};

console.log(maiorNum(22, 22));

/*2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.*/

let palavrasLower = ["nome", "sobrenome", "e-mail", "contato", "bairro"];

let palavrasUpper = [];
palavrasLower.forEach((palavra) => {
  let palavraCapitalizada = palavra.charAt(0).toUpperCase() + palavra.slice(1);

  palavrasUpper.push(palavraCapitalizada);
});

console.log(palavrasUpper);

/*3. Use map para transformar um array de números, multiplicando cada número por 5.*/

let numerosLista = [20, 11, 28, 2, 0, 14];

const novaLista = numerosLista.map((valor) => {
  return valor * 5;
});

console.log(novaLista);

/*4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.*/

let idades = [20, 12, 28, 11, 44, 8, 5];

const maiorIdade = idades.filter((idades) => {
  return idades >= 18;
});

console.log(maiorIdade);

/*5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.*/

const livro = {
  titulo: "Estrutura de Dados e Algoritmos com JavaScript",
  autor: "Loiane Groner",
  informacoes: { editora: "Novatec", ano: 2020 },
};

console.log(livro.informacoes.editora);

/*6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.*/

let frutas = ["romã", "kiwi", "caqui", "acerola", "tamarindo", "jamelão"];

let [fruta_1, fruta_2] = frutas;

console.log(`Primeira fruta escolhida foi ${fruta_1.toUpperCase()}`);
console.log(`Segunda fruta escolhida é ${fruta_2.toUpperCase()}`);

/*7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.*/

// Arrow function

const soma = (a, b) => {
  return `A soma dos números ${a} e ${b} da função com parametros é ${a + b}`;
};

console.log(soma(87, 28));

// ForEach

function calcularMedia(numeros) {
  let soma = 0;

  numeros.forEach((numero) => {
    soma += numero;
  });

  let media = (soma / numeros.length).toFixed(1);

  console.log(`A média é ${media}`);

  return media;
}

let notasAluno = [7.9, 6.4, 9.7];
let mediaAluno = calcularMedia(notasAluno);

// Map

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];

let quantidadeItens = figuras.map((array) => {
  return array.length;
});

console.log(`A quantidade de itens no array é: ${figuras.length}`);

// Filter

let notas = [6.5, 8.0, 9.0];
let maiorNota = notas[0];

notas.forEach((nota) => {
  if (nota > maiorNota) {
    maiorNota = nota;
  }
});

let notasFiltradas = notas.filter((nota) => nota === maiorNota);

console.log(`A maior nota do aluno foi ${notasFiltradas}.`);
