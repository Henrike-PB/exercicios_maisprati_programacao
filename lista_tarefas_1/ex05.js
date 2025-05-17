// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

// Solicita o peso em kg
const peso = Number(prompt('Digite seu peso em kg: '));

// Solicita a altura em metros
const altura = Number(prompt('Digite sua altura em metros: '));

// Calcula o IMC
const imc = peso / (altura * altura);

// Exibe o IMC com duas casas decimais
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

// Classifica o IMC usando if-else
if (imc < 18.5) {
    console.log('Categoria: Baixo peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Categoria: Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Categoria: Sobrepeso');
} else {
    console.log('Categoria: Obesidade');
}
