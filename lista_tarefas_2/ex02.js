// EX02 - Jogo de Adivinhação
// Script que gera um número aleatório de 1 a 100 e pede para o usuário adivinhar.
// Necessita do pacote prompt-sync: npm install prompt-sync
const prompt = require('prompt-sync')();

function jogoAdivinhacao() {
    const numero = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const palpite = prompt('Adivinhe o número (1 a 100): ');
        tentativas++;
        const chute = parseInt(palpite, 10);

        if (chute === numero) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            acertou = true;
        } else if (chute < numero) {
            console.log('Mais alto!');
        } else {
            console.log('Mais baixo!');
        }
    }
}
jogoAdivinhacao();