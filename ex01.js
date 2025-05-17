//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.


//Aqui vamos importar o módulo prompt-sync para receber a entrada do usuário
const prompt = require('prompt-sync')();

//Colocamos uma mensagem inicial para o usuário
console.log('== Verificador de Número Par ou Ímpar ==');

//Iremos receber o número digitado pelo usuário e converte-lo para um número inteiro
const numeroDigitado = prompt("Digite um número inteiro: ");
const numero = parseInt(numeroDigitado);

//Agora verificamos se o valor inserido é realmente um número
if (isNaN(numero)) {
    console.log("Entrada inválida! Por favor, digite um número inteiro.");
} else {
    //Verificando se o número é par ou ímpar
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é PAR.`);
    } else {
        console.log(`O número ${numero} é ÍMPAR.`);
    }
}

console.log("Programa finalizado!");
