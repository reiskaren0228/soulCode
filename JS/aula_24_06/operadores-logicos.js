/*
Operdaores lógicos -> boolean

&& -> E (AND)
|| -> OU (OR)
! - > NÃO (NOT)
*/

console.log(true);
console.log(false);

// AND (&&)

console.log(true && true); // TRUE
console.log(true && false); // FALSE
console.log(true && true && true && false); // FALSE
console.log(false && true); // FALSE

// OR (||)

console.log(true || true); // TRUE
console.log(true || false); // TRUE
console.log(true || false || false || false); // TRUE
console.log(false && false); // FALSE

// NOT (!)

console.log(!true); // FALSE
console.log(!false); // TRUE

//Ordem: ! > && > ||
/*console.log(!true || false); // FALSE
console.log(true || true && false); // TRUE
console.log(!false && true || false); // TRUE
*/

//let idade = 80;
let idade = 22;

//Idade entre 18 e 59 anos
console.log(idade >= 18 && idade <= 59); // FALSE

console.log(idade >= 18 && idade <= 59); // TRUE

let media = 7.2;
let sabeInglês = true;
let aprovado = media >= 7;

console.log("Aprovado? " + aprovado);

let contratado = aprovado && sabeInglês;

console.log("Contratado? " + contratado);
