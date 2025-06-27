// EX03 - Palavras Únicas
// Recebe uma string e retorna um array com as palavras únicas (sem repetições).
function palavrasUnicas(str) {
    const palavras = str.split(/\s+/);
    const unicas = [];
    for (let i = 0; i < palavras.length; i++) {
        if (!unicas.includes(palavras[i])) {
            unicas.push(palavras[i]);
        }
    }
    return unicas;
}

// Exemplo de uso:
console.log(palavrasUnicas("olá olá mundo mundo")); // ['olá', 'mundo']