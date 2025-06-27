// EX04 - Fatorial Recursivo
// Calcula o fatorial de um número de forma recursiva. Lança erro para n < 0, retorna 1 para n === 0.
function fatorial(n) {
    if (n < 0) throw new Error('Fatorial não definido para n < 0');
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

// Exemplo de uso:
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1