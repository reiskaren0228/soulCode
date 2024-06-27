let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];

console.log(figuras); // Ver os elemntos dentro do array

let numeros = [2, 12, 18, 20, 22, 28];
console.log(numeros);

// Acessando um elemento

console.log(figuras[1]);
console.log(fuguras[5]);

console.log(numeros[3]);
console.log(numeros[100]); // undefined

// Alterar os elementos

let notas = [6.5, 8.0, 9.0];
console.log("Antes: " + notas);

notas[1] = 8.5;
notas[2] = notas[2] + 0.5;
notas[0]++; //rotas[0] = notas[0] + 1

console.log("Depois: " + notas);

// Tamanho (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length);

// Percorrer array
for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

let alunos = ["Alberto", "Ana", "Beatriz", "Carlos"];

for(let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos[i]}`);
}

// For-of
let frutas = ["abacaxi", "laranja", "manga", "abacate"];

for(let f of frutas) { // Percorre todos elementos, e "f" assume cada um dos valores por vez
    console.log(f);
}

for(let i in frutas) { // Percorre os índices
    console.log(frutas[i]);
}

