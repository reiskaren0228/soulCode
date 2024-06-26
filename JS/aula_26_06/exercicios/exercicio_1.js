/*1. Escreva um programa que inverte uma string*/

let txtInicial = "Oi, me chamo Karen! Sou aluna SoulCode";
let txtInvertido = "";

for (let i = txtInicial.length - 1; i >= 0; i--) {
  txtInvertido += txtInicial[i];
}

console.log("Essa é a frase invertida:", txtInvertido);

/*2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"*/

let txtOriginal = "Sou aluna SoulCode do curso Full Stack";
let txtRemovido = "Full";
let txtSubstituido = "###";

let texto = txtOriginal.split(" ");
let txtModificada = [];

for (let palavra of texto) {
  if (palavra === txtRemovido) {
    txtModificada.push(txtSubstituido);
  } else {
    txtModificada.push(palavra);
  }
}

let txtNovo = txtModificada.join(" ");

console.log("Frase depois de modificada:", txtNovo);

/*3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com */

let email1 = "karen@soulcode.com";
let email2 = "novousuario@gmail.com";

if (email1.toLowerCase().endsWith("@soulcode.com")) {
  console.log(email1 + " é um email Soulcode.");
} else {
  console.log(email1 + " não é um email Soulcode.");
}

if (email2.toLowerCase().endsWith("@soulcode.com")) {
  console.log(email2 + " é um email Soulcode.");
} else {
  console.log(email2 + " não é um email Soulcode.");
}
