// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)


const prompt = require('prompt-sync')();

// Ler os lados do triângulo
const A = Number(prompt('Digite o valor do lado A: '));
const B = Number(prompt('Digite o valor do lado B: '));
const C = Number(prompt('Digite o valor do lado C: '));

// Verificar se os lados formam um triângulo válido
if (A < B + C && B < A + C && C < A + B) {
    // Verificar o tipo do triângulo
    if (A === B && B === C) {
        console.log('Triângulo equilátero: todos os lados iguais.');
    } else if (A === B || A === C || B === C) {
        console.log('Triângulo isósceles: dois lados iguais.');
    } else {
        console.log('Triângulo escaleno: todos os lados diferentes.');
    }
} else {
    console.log('Os valores fornecidos não formam um triângulo.');
}
