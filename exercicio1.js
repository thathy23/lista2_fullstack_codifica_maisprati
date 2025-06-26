// Seção 1: Estruturas de Controle Avançadas(exercicíos 1 a 3)

// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function dataValida(dia,mes,ano) {
    if (mes < 1 || mes > 12)
        return false

    const diasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]//total de dias dos meses de jan a dez

    const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 ===0)

    if (anoBissexto) diasDoMes[1] = 29

    if (dia < 1 || dia > diasDoMes[mes - 1])
        return false

    return true
}

console.log(dataValida(31, 1, 2024)) // true
console.log(dataValida(29, 2, 2024))// true (ano bissexto)
console.log(dataValida(29, 2, 2023))// false
console.log(dataValida(31, 4, 2022))// false

