// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// Importando o módulo prompt-sync para receber entrada do usuário
const prompt = require('prompt-sync')();

// Exibindo mensagem para o usuário
console.log("== Classificador de Idade ==");

// Recebendo a idade do usuário e convertendo para número inteiro
const idadeDigitada = prompt("Digite sua idade: ");
const idade = parseInt(idadeDigitada);

// Verificando se o valor inserido é uma idade válida
if (isNaN(idade)) {
    console.log("Entrada inválida! Por favor, digite um número para a idade.");
} else if (idade < 0 || idade > 120) {
    console.log("Idade fora dos limites razoáveis. Por favor, digite uma idade entre 0 e 120 anos.");
} else {
    // Classificando a idade em categorias
    if (idade <= 12) {
        console.log(`Com ${idade} anos, você é classificado como: CRIANÇA`);
    } else if (idade <= 17) {
        console.log(`Com ${idade} anos, você é classificado como: ADOLESCENTE`);
    } else if (idade <= 59) {
        console.log(`Com ${idade} anos, você é classificado como: ADULTO`);
    } else {
        console.log(`Com ${idade} anos, você é classificado como: IDOSO`);
    }
}

console.log("Programa finalizado!");