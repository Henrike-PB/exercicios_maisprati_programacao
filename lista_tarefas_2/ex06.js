// EX06 - Memoization
// Retorna uma função que armazena em cache os resultados de fn para cada conjunto de argumentos.
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const resultado = fn.apply(this, args);
        cache[key] = resultado;
        return resultado;
    };
}

// Exemplo de uso:
const memoFatorial = memoize(fatorial);
console.log(memoFatorial(5)); // 120
console.log(memoFatorial(5)); // 120 (do cache)