// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

const quantidade = Number(prompt('Digite a quantidade de maçãs compradas: '));

let precoPorMaca;

if (quantidade < 12) {
    precoPorMaca = 0.30;
} else {
    precoPorMaca = 0.25;
}

const total = quantidade * precoPorMaca;

console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);
