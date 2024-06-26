/*1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.*/

function imcCalculo(peso, altura) {
  return peso / (altura * altura).toFixed(1);
}

function resultadoImc() {
  if (imc < 16) {
    console.log(`*** Atenção *** Paciente com Magreza Grave`);
  } else if (imc >= 16 && imc <= 16.9) {
    console.log(`Paciente com Magreza Moderada`);
  } else if (imc >= 17 && imc <= 18.5) {
    console.log(`Paciente com Magreza Leve`);
  } else if (imc >= 18.6 && imc <= 24.9) {
    console.log(`*** Paciente com Peso Ideal ***`);
  } else if (imc >= 25 && imc <= 29.9) {
    console.log(`Paciente com Sobrepeso`);
  } else if (imc >= 30 && imc <= 34.9) {
    console.log(`*** Atenção *** Paciente com Obesidade Grau I`);
  } else {
    console.log(`*** Paciente com Obesidade Grau II ***`);
  }
}

let imc = imcCalculo(60.9, 1.58);
console.log(`O resultado do IMC é de ${imc}`);
resultadoImc(imc);

/*2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%*/

function numeroPorcentagem(num) {
  return (num * 100).toFixed(1) + "%";
}

let num = 0.228;
console.log(`A porcentagem do ${num} é ${numeroPorcentagem(num)}`);

/*3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true*/

function numero(numeroNegativo) {
  return numeroNegativo < 0;
}

let numeroNegativo = 20;
console.log(
  `O número escolhido ${numeroNegativo} é negativo? ${numero(numeroNegativo)}`
);

/*4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.*/

console.log("Inicio da contagem --> ");
function conteNum(numero) {
  for (let num = 1; num <= numero; num++) {
    console.log(num);
  }
}

conteNum(22);
console.log("Fim da contagem!!");

/*5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.*/

function nomeCompleto(nome, sobrenome) {
  return nome, sobrenome;
}

let nome = "Karen";
let sobrenome = "Reis";

console.log(
  `Primeiro nome:${nome} / Sobrenome: ${sobrenome}. Nome completo: ${nome} ${sobrenome}`
);

/*6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.*/

function areaCirculo(r) {
  return 3.14 * r * r;
}

let raio = 2;
let area = areaCirculo(raio);
console.log(`A área do círculo é ${area}`);

/*7. Crie uma função que recebe a área de um circulo e mostra o nível:
Entre 1 e 20 => Nível I
Entre 21 e 40 => Nível II
Qualquer outro diâmetro => Nível inválido*/

function nivelCirculo(area) {
  if (area >= 1 && area <= 20) {
    console.log("Nível I");
  } else if (area >= 21 && area <= 40) {
    console.log("Nível II");
  } else {
    console.log("Nível inválido.");
  }
}
let circuloArea = areaCirculo(raio);
nivelCirculo(circuloArea);
/*8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.*/
function palavraMin(palavra) {
  return palavra.toLowerCase();
}

console.log(palavraMin("CASA"));
console.log(palavraMin("NOME"));

/*9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.*/

function contadorCaracter(palavra, letra) {
  let qtd = 0;

  for (let index = 0; index < palavra.length; index++) {
    if (palavra[index] === letra) {
      qtd++;
    }
  }

  return qtd;
}

console.log(contadorCaracter("Livro", "v"));
console.log(contadorCaracter("Dinossauro", "s"));
