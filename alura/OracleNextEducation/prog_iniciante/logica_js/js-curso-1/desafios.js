// --- Desafios Dia 1

// alert("Boas vindas ao nosso site!");

// let nome = "Lua";

// let idade = 25;

// let numeroDeVendas = 50;

// let saldoDisponivel = 1000;

// let mensagemDeErro = ("Erro! Preencha todos os campos");

// alert(mensagemDeErro);

// let nomeUsuario = prompt("Qual o seu nome?");

// let idadeUsuario = prompt("Qual a sua idade?");

// if (idadeUsuario >= 18) {
//   alert("Pode tirar a carteira de habilitação!")
// }

// // 1. ---

// let dia = prompt("Que dia é hoje?");

// if (dia == "Sábado" || dia == "Domingo") {
//   alert("Bom final de semana!");
// } else {
//   alert("Boa semana!");
// }

// // 2. ---

// let numero = prompt("Informe um número");

// if (numero < 0) {
//   alert("Número negativo!");
// } else {
//   alert("Número positivo!");
// }

// // 3. ---

// let pontuacao = prompt("Informe a sua pontuação de 0 a 150");

// if (pontuacao >= 100) {
//   console.log("Parabéns, você venceu!");
// } else {
//   console.log("Tente novamente para ganhar");
// }

// // 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// let saldo = 85000
// alert(`Seu saldo atual é ${saldo}`);

// // 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// let nomeInserido = prompt("Insira seu nome");
// alert(`Boas-vindas, ${nomeInserido}!`);

// // Desafios
// // Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// let contadorCrescente = 0;

// while (contadorCrescente <= 10) {
//   console.log(`${contadorCrescente}`);
//   contadorCrescente++;
// }

// // Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// let contadorDecrescente = 10;

// while (contadorDecrescente >= 0) {
//   console.log(`${contadorDecrescente}`);
//   contadorDecrescente--;
// }

// // Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// let contagemRegressiva = prompt("Digite um número para a contagem regressiva:");

// while (contagemRegressiva >= 0) {
//   console.log(contagemRegressiva);
//   contagemRegressiva--;
// }

// // Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// let contagemProgressiva = prompt("Digite um número para a contagem progressiva");
// let num = 0;

// while (num <= contagemProgressiva) {
//   console.log(`${num}`);
//   num++;
// }

// ---

// // 08 Desafio: hora da prática

// // Desafios finais
// // Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

// let mensagemDeBoasVindas = "Bem-vindo!";

// console.log(mensagemDeBoasVindas);

// // Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

// let nome = "Matheus Gustavo Saldanha Folle";

// console.log(`Olá, ${nome}`);

// // Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

// alert(`Olá, ${nome}`);

// // Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// let programmingLanguage = prompt("Digite sua linguagem de programação favorita:");

// console.log(programmingLanguage);

// // Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

// let valor1 = 17;
// let valor2 = 24;

// let resultado = valor1 + valor2;

// console.log(`A soma de ${valor1} e ${valor2} é ${resultado}`)

// // Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

// let resultadoSub = valor1 - valor2;

// console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoSub}`);

// // Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// let idadeUsuario = prompt("Qual sua idade?");

// let maiorMenor = idadeUsuario > 18 ? "maior" : "menor";

// console.log(`Você é ${maiorMenor} de idade`);

// // Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

// let num = prompt("Informe um número para a checagem");

// if (num > 0) {
//   console.log("Maior que zero: número positivo")
// } else if (num < 0) {
//   console.log("Menor que zero: número negativo")
// } else {
//   console.log("Número zero!")
// }

// // Use um loop while para imprimir os números de 1 a 10 no console.

// let num = 0;

// while (num < 10) {
//   num++;
//   console.log(num);
// }

// // Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// let alunoNota = prompt("Informe sua nota:");

// let statusNota = alunoNota >= 7 ? "aprovado" : "reprovado";

// console.log("Você está " + statusNota);

// // Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

// let random = Math.random();

// console.log(random);

// // Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

// let random = parseInt(Math.random() * 10) + 1;
// console.log(random);

// // Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

// let random = parseInt(Math.random() * 1000) + 1;
// console.log(random);

