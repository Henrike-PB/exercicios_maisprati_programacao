// EX08 - Agrupamento por Propriedade
// Recebe um array de vendas e retorna um objeto com a soma total por cliente.
function somaTotalPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});
}

// Exemplo de uso:
console.log(somaTotalPorCliente([
    {cliente: 'Ana', total: 10},
    {cliente: 'Ana', total: 5},
    {cliente: 'Bia', total: 7}
])); // { Ana: 15, Bia: 7 }
