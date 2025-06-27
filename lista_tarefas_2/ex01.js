// EX01 - Validação de Datas
// Função que verifica se uma data é válida, considerando meses, dias e anos bissextos.
function ehDataValida(dia, mes, ano) {
    // Meses com seus respectivos dias
    const diasPorMes = [
        31,
        (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28,
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    if (mes < 1 || mes > 12) return false;
    if (dia < 1 || dia > diasPorMes[mes - 1]) return false;
    return true;
}
ehDataValida(dia, mes, ano);

// Exemplo de uso:
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(31, 4, 2023)); // false (abril só tem 30 dias)
