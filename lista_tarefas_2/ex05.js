// EX05 - Debounce
// Retorna uma função que só executa fn se não for chamada novamente dentro do intervalo de delay.
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Exemplo de uso:
const debounced = debounce(() => console.log('Executou!'), 1000);
debounced();
debounced(); // Só executa uma vez após 1 segundo sem chamadas repetidas.