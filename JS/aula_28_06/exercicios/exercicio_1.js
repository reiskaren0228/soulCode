/*Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.*/

function filtrarNumerosPares(numerosLista) {
  let numerosPares = [];

  for (let i = 0; i < numerosLista.length; i++) {
    if (numerosLista[i] % 2 === 0) {
      numerosPares.push(numerosLista[i]);
    }
  }

  return numerosPares;
}
let arrayOriginal = [1, 20, 33, 64, 57, 60, 68, 82, 94, 130];
let numerosListaPares = filtrarNumerosPares(arrayOriginal);
console.log(numerosListaPares);

//Usei um loop for com o length para percorrer cada elemento do array, pois foi o metodo que achei mais rápido para chegar no resultado solicitado. E adicionei o método push para adicionar os numeros Pares ao novo array, que criei somente com os numero spares.

/*Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.*/

// Função para calcular a soma de todos os números de um array
function numSoma(arrayNum) {
  let soma = 0;

  for (let i = 0; i < arrayNum.length; i++) {
    soma += arrayNum[i];
  }

  return soma;
}

let arrayNovo = [2, 12, 28, 10, 11];
let somaArray = numSoma(arrayNovo);
console.log(somaArray);

// Nessa funcão usei a mesma lógica que a anterior, criei um função e o usei o length para percorrer o array e guardei o resultado em uma nova let para guardar a soma dos numeros.

/*Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo. */

function palindromoArray(string) {
  let strgInicial = string.replace(/\s+/g, "").toLowerCase();

  let strgTransformada = strgInicial.split("").reverse().join("");

  return strgInicial === strgTransformada;
}

let palavra1 = "arara";
let palavra2 = "bombom";

console.log(palindromoArray(palavra1));
console.log(palindromoArray(palavra2));

// Usei como base a ultima aula que o senhor deu usando o reverse e o join pra resolver esta questão. Tive dificuldade no inicio para usar o replace e o split, mas fiz algumas pesquisas, além do chat gpt e aprendi um pouco sobre esse metodos e cosneguir resolver.

/*Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.*/

function vogaisContador(string) {
  let vogais = ["a", "e", "i", "o", "u"];

  let contadorInicial = 0;

  for (let i = 0; i < string.length; i++) {
    if (vogais.includes(string[i])) {
      contadorInicial++;
    }
  }

  return contadorInicial;
}

let fraseExemplo = "Olá, me chamo Karen e sou aluna da Soul Code!";
let vogaisQtd = vogaisContador(fraseExemplo);
console.log(vogaisQtd);

// Usei novamente o for para esta uestão, pois estou tendo mais facilidade para entender. Criei uma variavel com as vogais e usei o if com o includes para toda vez que uma vogal aparecer na frase ela dfosse incluida na variavel da vogaisQtd. Fiz umas pesquisa e vi que tem outra maneira mais facil e rapida, porem ainda não me sinto apta e confiante para usar.

/*Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.*/

function menorNum(numerosLista) {
  if (numerosLista.length === 0) {
    return "O array utilizado está vazio, por favor digite alguns numeros para wue a função funcione corretamente";
  }

  let menorNumero = numerosLista[0];

  for (let i = 1; i < numerosLista.length; i++) {
    if (numerosLista[i] < menorNumero) {
      menorNumero = numerosLista[i];
    }
  }

  return menorNumero;
}

let numerosLista = [20, 11, 28, 2, 0, 14];
let menorNumero = menorNum(numerosLista);
console.log(menorNumero);

// Como o senhor pode perceber estou usando a mesma lógica que a demais, pois como expliquei na questão anterior ainda não estou sabendo usar corretamento os outros for, mas como estou utilizando a mesma logica de criar um funcão , adicionar o array, usar o lenght para percorrer esta lista e depois usei o if para selecionar o menor numero da lista e depois criei uma variaval para amarzenar esse numero e depois mostrar ele no console log.

/*Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3, */
function mediaCalc(listaNum) {
  if (listaNum.length === 0) {
    return "O array utilizado está vazio, por favor digite alguns numeros para wue a função funcione corretamente";
  }

  let soma = 0;

  for (let i = 0; i < listaNum.length; i++) {
    soma += listaNum[i];
  }

  let media = soma / listaNum.length;

  return media;
}

let listaNum = [8.3, 10.0, 6.2];
let mediaLista = mediaCalc(listaNum);
console.log(mediaLista);

// Neste quesito continuo usando a logica dos demais e usei o exemplo da aula mostrada e explica em sala de aula do dia 27/06, que falava sobre função e a outra aula do dia 25/06 que tinha um exemplo de funçao com media.

/*Exercício 7: Escreva uma função que conte a frequência de cada caracter em uma string. Dica: use objetos para guardar as contagens de cada caracter.*/
function contadorObjFrequencia(string) {
  let objFrequencia = {};

  for (let i = 0; i < string.length; i++) {
    let caracter = string[i];

    if (objFrequencia[caracter]) {
      objFrequencia[caracter]++;
    } else {
      objFrequencia[caracter] = 1;
    }
  }

  return objFrequencia;
}

let texto = "bombom";
let objFrequenciaDecaracters = contadorObjFrequencia(texto);
console.log(objFrequenciaDecaracters);

// Esse tive que pedir ajuda ao chat gpt e o googlr, pois tive bastante dificuldade de entender e fazer, mais fiz bastante pesquisa e pedir para o gpt me explicar a logica que eu estava erradando e o que ei podia fazer para funcionar. Mas como o senhor percebe continuei seguinda a mesma logica que as demais questões, usei o for e o length para percorrer a variavel e a armazenei em uma varial po resultado e depois mostrei no console log.

/*Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com. */

function emailFunction(email) {
  let arroba = email.indexOf("@");
  if (arroba === -1) {
    return "*** Esse email está inválido *** ";
  }

  let email_1 = email[0];

  let emailModificado = "*".repeat(arroba - 1);

  let dominio = email.slice(arroba);

  let emailTransformado = email_1 + emailModificado + dominio;

  return emailTransformado;
}

let emailValido = "kreisdemenezes@soulcode.com";
let emailTransformado = emailFunction(emailValido);
console.log(emailTransformado);

//Tive muita dificuldade nesta questão também, e como a anterior pedir ajuda ao chat e pedir pra ele mostrar o meu erro, e percebi que eu percorria o e-mail mais estava sabendo como trocar corretamento as letras por um caracter como solicitado.  Seguir a mesma linha de pensamentos das outras wuestões usei um for para percorrer o e-mail junto com o length e usei o if para para separar apenas o texto antes do @ e usei o repeat, que aprendi com o gpt para repetir o * até chegaro @. E armazenei o resultado em uma nova variavel
