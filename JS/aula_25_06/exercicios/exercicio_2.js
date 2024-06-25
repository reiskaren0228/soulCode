/*1. Faça a tabuada completa utilizando o loop for.
 */

for (let numeros_contador = 1; numeros_contador <= 10; numeros_contador++) {
  console.log("-----------");
  for (let num_mult = 1; num_mult <= 10; num_mult++) {
    console.log(
      `${numeros_contador} x ${num_mult} = ${num_mult * numeros_contador}`
    );
  }
}

/*2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.*/

let num_inicial = 0;
let anter_Soma = 1;
let fibonacci_num;

console.log(num_inicial);
console.log(anter_Soma);

for (let num = 2; num <= 10; num++) {
  fibonacci_num = num_inicial + anter_Soma;

  console.log(fibonacci_num);

  num_inicial = anter_Soma;
  anter_Soma = fibonacci_num;
}

/*3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente)..
 */

let n = 1;

for (let decrescente_num = 10; decrescente_num >= n; decrescente_num--) {
  console.log(decrescente_num);
}

/*4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.*/

let numInteiro = 5;
let fatorial = 1;
let valor_sequencia = "";

for (let num = numInteiro; num >= 1; num--) {
  fatorial *= num;
  valor_sequencia += num === 1 ? `${num}` : `${num} x `;
}

console.log(`${numInteiro}! = ${valor_sequencia} = ${fatorial}`);

/*5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7*/

let mult_num = 7;
let limitador = 100;

for (let index = 1; index <= limitador; index++) {
  if (index % mult_num === 0) {
    console.log(index);
  }
}

/*6. Mostre a soma do 50 até o número 100 usando loop for.*/

let soma = 0;
let limitador_num = 50;

for (let n = limitador_num; n <= 100; n++) {
  soma += n;
}
console.log(`A soma de 50 até o número 100 é : ${soma}`);

/*7. Mostre a seguinte figura com utilização de laços:
 *
 **
 ***
 ****
 *****
 */

for (let num_linha = 1; num_linha <= 5; num_linha++) {
  let linha = "";
  for (let qtd_desenho = 1; qtd_desenho <= num_linha; qtd_desenho++) {
    linha += "*";
  }
  console.log(linha);
}

//ou

let linha = "";
let altura = 10;

for (let index = 0; index < altura; index++) {
  linha = linha + "*";
  console.log(linha);
}
