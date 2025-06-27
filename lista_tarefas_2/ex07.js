// EX07 - Mapeamento e Ordenação
// Recebe um array de produtos e retorna um array com os nomes ordenados pelo preço crescente.
function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() // copia para não alterar o original
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

// Exemplo de uso:
console.log(nomesOrdenadosPorPreco([
    {nome: 'A', preco: 10},
    {nome: 'B', preco: 5},
    {nome: 'C', preco: 8}
])); // ['B', 'C', 'A']