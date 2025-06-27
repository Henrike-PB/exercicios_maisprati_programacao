// EX09 - Conversão Entre Formatos
// Recebe um array de pares e retorna o objeto equivalente.
function paresParaObjeto(pares) {
    const obj = {};
    for (const [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

// Exemplo de uso:
console.log(paresParaObjeto([['a', 1], ['b', 2]])); // { a: 1, b: 2 }


// Recebe um objeto e retorna um array de pares [chave, valor].
function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, chave)) {
            pares.push([chave, obj[chave]]);
        }
    }
    return pares;
}

// Exemplo de uso:
console.log(objetoParaPares({a: 1, b: 2})); // [['a', 1], ['b', 2]]