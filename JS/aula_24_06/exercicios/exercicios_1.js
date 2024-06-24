// Exercicio 1

let fahrenheit = 65.7;
let celcius = (fahrenheit - 32) / 1.8;

console.log(celcius.toFixed(2));

// Exercicio 2

let nota1 = 8.2;
let nota2 = 7.4;
let nota3 = 6.0;
let nota4 = 10;
let nota5 = 9.9;

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

let pesoNotaTotal = peso1 + peso2 + peso3 + peso4 + peso5;

let mediaPonderada =
  (nota1 * peso1) +
  (nota2 * peso2) +
  (nota3 * peso3) +
  (nota4 * peso4) +
  (nota5 * peso5) / pesoNotaTotal;

console.log(mediaPonderada.toFixed(2));
