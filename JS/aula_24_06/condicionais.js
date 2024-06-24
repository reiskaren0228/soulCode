/*  Estrutura Condicionais (If - Else)

    if (condicao) {
        // instruções caso verdadeiro
    } else {
        // instruções caso falso 
    }

*/
let idade = 36;

if (idade > 18) {
  console.log("Parabéns !Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}

let media = 7.2;
let sabeInglês = true;
let aprovado = media >= 7;

if (aprovado) {
  console.log("Parabéns! Você foi aprovado!");
} else {
  console.log("Que pena! Continue tentando...");
}

if (aprovado && sabeInglês) {
  console.log("Parabéns! Você foi Contratado!");
} else {
  console.log("Que pena! Você não foi Contratado. Mas Continue tentando...");
}

//Positivo, Negativo ou Zero

if (numero > 0) {
  console.log("O número " + numero + " é positivo");
} else if (numero < 0) {
  console.log("O número " + numero + " é negativo");
} else {
  console.log("O número  é zero");
}

//É ímpar ou par

let n = 7;

if (n % 2 === 0) {
  console.log("O numero é par?");
} else {
  console.log("O numero é ímpar?");
}

// 1 - Domingo, 2 - Segunda, 3 - Terça, ...

let dia = 4;

if (dia == 1) {
  console.log("Hojé é Domingo");
} else if (dia == 2) {
  console.log("Hojé é Segunda");
} else if (dia == 3) {
  console.log("Hojé é Terça");
} else if (dia == 4) {
  console.log("Hojé é Quarta");
} else if (dia == 2) {
  console.log("Hojé é Quinta");
} else if (dia == 2) {
  console.log("Hojé é Sábado");
} else {
  console.log("Não existe este dia da semana");
}
