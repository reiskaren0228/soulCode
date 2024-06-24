/*1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação*/

let nota1 = 3.3;
let nota2 = 6.4;
let nota3 = 3.7;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log(`Aluno Aprovado com a media de ${media.toFixed(1)}`);
} else if (media >= 5 && media < 7) {
  console.log(`Aluno precisa de Reforço. Sua media foi de ${media.toFixed(1)}`);
} else {
  console.log(`Aluno foi Reprovado. Sua media foi de ${media.toFixed(1)}`);
}

/*2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.

resultados menores que 16 — magreza grave;
resultados entre 16 e 16,9 — magreza moderada;
resultados entre 17 e 18,5 — magreza leve;
resultados entre 18,6 e 24,9 — peso ideal;
resultados entre 25 e 29,9 — sobrepeso;
resultados entre 30 e 34,9 — obesidade grau I;
resultados maior que 34,9 — obesidade grau II;
*/

let peso = 60.9;
let altura = 1.58;
let imc = peso / (altura * altura).toFixed(1);

if (imc < 16) {
  console.log(`*** Atenção *** Paciente com Magreza Grave`);
} else if (imc >= 16 && imc <= 16.9) {
  console.log(`Paciente com Magreza Moderada`);
} else if (imc >= 17 && imc <= 18.5) {
  console.log(`Paciente com Magreza Leve`);
} else if (imc >= 18.6 && imc <= 24.9) {
  console.log(`*** Paciente com Peso Ideal ***`);
} else if (imc >= 25 && imc <= 29.9) {
  console.log(`Paciente com Sobrepeso`);
} else if (imc >= 30 && imc <= 34.9) {
  console.log(`*** Atenção *** Paciente com Obesidade Grau I`);
} else {
  console.log(`*** Paciente com Obesidade Grau II ***`);
}

/*3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!*/

let a = 20;
let b = 20;

if (a > b) {
  console.log(`A é maior que B`);
} else if (b > a) {
  console.log(`B é maior que A`);
} else {
  console.log(`Os valores de A e B são iguais`);
}

/*4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.*/

let salario = 1800.0;
let quantidadeDependentes = 6;

if (quantidadeDependentes > 1 && quantidadeDependentes <= 5) {
  let aumento30Porcento = salario * 0.3;

  console.log(
    `Funcionário possue ${quantidadeDependentes} dependente(s), seu reajuste salarial é de R$ ${aumento30Porcento}`
  );

  console.log(
    `Novo salário do funcionário é de R$ ${salario + aumento30Porcento} reais`
  );
} else if (quantidadeDependentes > 5) {
  let aumento40Porcento = salario * 0.4;
  console.log(
    `Funcionário possue ${quantidadeDependentes} dependente(s), seu reajuste salarial é de R$ ${aumento40Porcento}`
  );

  console.log(
    `Novo salário do funcionário é de R$ ${salario + aumento40Porcento} reais`
  );
} else {
  console.log(
    `Funcionário possue ${quantidadeDependentes} dependente(s), ou seja, ele não terá seu reajuste salarial.`
  );
}

/*5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.*/

let diaDaSemana = 3;

if (diaDaSemana == 1) {
  console.log(`Hoje é Domingo !!! Dia de descanso`);
} else if (diaDaSemana == 2) {
  console.log(`Hoje é Segunda-feira !!! Mas uma semana se inicia.`);
} else if (diaDaSemana == 3) {
  console.log(`Hoje é Terça-feira !!! Trabalhar/Estudar é preciso.`);
} else if (diaDaSemana == 4) {
  console.log(`Hoje é Quarta-feira !!! Já estamos na metade da semana!`);
} else if (diaDaSemana == 5) {
  console.log(
    `Hoje é Quinta-feira !!! Uhhhhh já estar chegando o final de semana.`
  );
} else if (diaDaSemana == 6) {
  console.log(`Hoje é Sexta-feira !!! Obaaaa Sextouuuuuu!!!`);
} else {
  console.log(`Hoje é Sábado !!! Dia de dormir até acordar !!!`);
}

/*6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.*/

let ano = 1987;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`O ano de ${ano} é um ano bissexto.`);
} else {
  console.log(`O ano de ${ano} não é um ano bissexto.`);
}
/*7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.*/

let idade = -6;

if (idade < 0 || idade > 130) {
  console.log(`*** A idade digitada é Inválida ***`);
} else {
  console.log(`A idade informada foi ${idade} anos`);
}

/*8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/

let horario = new Date();
let horaSistema = horario.getHours();

let matutino = horaSistema >= 0 && horaSistema < 12;
let vespertino = horaSistema >= 12 && horaSistema < 18;
let noturno = horaSistema >= 18 && horaSistema < 24;

if (matutino) {
  console.log("Bom Dia! Agora está na hora da sua aula matutina.");
} else if (vespertino) {
  console.log("Boa Tarde! Agora está na hora da sua aula vespertina.");
} else if (noturno) {
  console.log("Boa Noite! Agora está na hora da sua aula noturna.");
} else {
  console.log("Valor Inválido!");
}
