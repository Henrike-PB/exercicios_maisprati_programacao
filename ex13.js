// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

while (true) {
    const entrada = Number(prompt('Digite um número decimal (0 para sair): '));

    if (entrada === 0) {
        break; // sai do loop quando o usuário digita 0
    }

    soma += entrada;
    contador++;
}

if (contador === 0) {
    console.log('Nenhum número foi digitado para calcular a média.');
} else {
    const media = soma / contador;
    console.log(`A média dos números digitados é: ${media.toFixed(2)}`);
}
