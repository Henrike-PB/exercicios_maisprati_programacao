// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// Inicializa os dois primeiros números da sequência
let a = 0;
let b = 1;

console.log('Sequência de Fibonacci (10 primeiros números):');
console.log(a); // imprime o primeiro número (0)

for (let i = 1; i < 10; i++) {
    console.log(b); // imprime o próximo número da sequência
    const proximo = a + b; // calcula o próximo número
    a = b; // atualiza o valor de a
    b = proximo; // atualiza o valor de b
}
