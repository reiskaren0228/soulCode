// Objetos = servem para estruturar dados
/*

    let variavel = {

        propriedade : valor1,
        propriedade : valor2,
        propriedade : valor2
    }

*/

//nome, idade, peso, altura

let pessoa1 = {
  nome: "Karen",
  idade: "36",
  peso: 71.5,
  altura: 1.58,
};

let pessoa2 = {
  nome: "Adriano",
  idade: "30",
  peso: 78.7,
  altura: 1.68,
};

// Acesso de propriedade
// console.log(pessoa1.nome);
// console.log(pessoa2.idade);
// console.log(pessoa1["peso"]);
// console.log(pessoa2["altura"]);
// console.log(pessoa1.email);

// Adicionando propriedades ao objeto
pessoa1["email"] = "jose@email.com";
//console.log(pessoa1);

// Alterar valores nas propriedades
pessoa1.idade = 36;
pessoa2["idade"] += 5; // acrescenta +5 a idade atual

//console.log(pessoa1.idade);
//console.log(pessoa2.idade);
//console.log("Pessoa 2: ", pessoa2);

// Removendo propriedades;
delete pessoa1["idade"]; // pessoa1.idade
//console.log("Pessoa 1: ", pessoa1);

// Conversão JSON
const dado = JSON.stringify(pessoa2);
console.log(JSON.parse(dado));
