// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log('Menu de opções:');
console.log('1 - Dizer Olá');
console.log('2 - Mostrar a data atual');
console.log('3 - Sair');

const escolha = prompt('Escolha uma opção (1, 2 ou 3): ');

switch (escolha) {
    case '1':
        console.log('Olá! Seja bem-vindo(a)!');
        break;
    case '2':
        const dataAtual = new Date();
        console.log(`Data e hora atual: ${dataAtual.toLocaleString()}`);
        break;
    case '3':
        console.log('Saindo do programa. Até mais!');
        break;
    default:
        console.log('Opção inválida. Por favor, escolha 1, 2 ou 3.');
        break;
}
