// Seção 3: Arrays e Objetos Complexos (exercicios 7 a 9)

// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.


const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "Bruno", total: 50 },
    { cliente: "Ana", total: 75 },
    { cliente: "Carlos", total: 120 },
    { cliente: "Bruno", total: 30 }
]
  

function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
      const { cliente, total } = venda
  
      if (acumulador[cliente]) {
        acumulador[cliente] += total
      } else {
        acumulador[cliente] = total
      }
  
      return acumulador;
    }, {})
}
  
const resultado = agruparPorCliente(vendas)
console.log(resultado) 
    