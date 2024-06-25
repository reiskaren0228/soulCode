/*1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.*/

let numero = 2;

while (numero <= 10) {
  console.log(numero);
  numero += 2;
}

/*2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70*/

let num_mult = 1;

while (num_mult <= 10) {
  let resultado = 7 * num_mult;
  console.log('7 x ' + num_mult + ' = ' + resultado);
  num_mult++; 
}

/*3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.*/
let num = 1;
let soma = 0;

while (num <= 999) {
  if (num % 2 !== 0) { 
    soma += num;
  }
  num++; 
}

console.log('A soma dos números ímpares de 1 até 999 é de : ' + soma);

/*4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.
*/
let num_divisivel = 1;
let contador = 0;

while (num_divisivel <= 1000) {
  if (num_divisivel % 9 === 0) {
    console.log(num_divisivel);
    contador++; 
  }
  num_divisivel++; 
}

console.log('Total de números Divisíveis por 9 entre 1 e 1000: ' + contador);
