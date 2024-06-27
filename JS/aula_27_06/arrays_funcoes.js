let nums = [];
console.log(nums);

// Adiciona elemento ao final do array

nums.push(4);
nums.push(5);
nums.push(10);

console.log(nums);

nums.push(20);
console.log(nums);

// Removendo o ultimo elemento

nums.pop();
nums.pop();
console.log(nums);

// Inserir no inicio

let notas = [6.8, 7.8, 9.8];
console.log(notas);
notas.unshift(10.0);
console.log(notas);
notas.unshift(5.4);
notas.unshift(8.8);
console.log(notas);

// Remove do inicio

notas.shift();
notas.shift();
console.log(notas);

// Juntar o array e montar uma string

let enderecoIP = [192, 168, 1, 1];
console.log(enderecoIP.join("."));

let data = [17, 11, 1987];
let dataString = data.join("/");
console.log(dataString);

// Concatenar arrays
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2); // Novo array com 2 elementos

console.log(p3);

// Array reverso

let n = [1, 2, 3];
let invertido = n.reverse();
console;

//Includes = mostra se o valor existe ou não no array

let pessoas = ["Karen", "Adriano", "Miguel"];

if (pessoas.includes("Miguel")) {
  console.log(" Miguel está presente?");
} else {
  console.log("Miguel não esta presente");
}

//Split

let frase = "Eu vou estudar React";
let dataInicio = "26/06/2024";

let palavraEspecial = "Batata";

let fraseArray = frase.split(" ");
let dataArray = dataIniciospli("/");

// Inverter a string

console.log(palavraEspecial.split(""));

console.log(palavraEspecial.split("").reverse().join(""));

//IndexOf -> retorna o indice de um elemento

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];

console.log(figuras.indexOf("ok"));
console.log(figuras.indexOf("sorriso"));
console.log(figuras.indexOf("batata")); // -1 -> não encontrou o elemento no array

let fig1 = figuras.slice(1, 3);
console.log(fig1);

let fig2 = figuras.slice(1); // corta do 1 até o final do array
console.log(fig2);

let fig3 = figuras.slice(3, 7);
console.log(fig3);

let fig4 = figuras.slice(2, figuras.length);
console.log(fig4);

// Ultimo elemento

console.log(figuras.slice(-1));
console.log(figuras[figuras.length - 1]);
