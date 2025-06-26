// Seção 3: Arrays e Objetos Complexos (exercicios 7 a 9)

// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
    
    const ordenados = [...produtos].sort((a, b) => a.preco - b.preco)
  
    
    const nomes = ordenados.map(produto => produto.nome)
  
    return nomes
  }

  const produtos = [
    { nome: "Cadeira", preco: 50 },
    { nome: "Mesa", preco: 1100 },
    { nome: "TV", preco: 800 },
    { nome: "Sofa", preco: 3000 }
  ]
  
  const resultado = nomesOrdenadosPorPreco(produtos)
  console.log(resultado)
  