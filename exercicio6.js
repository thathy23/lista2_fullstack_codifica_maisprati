// Seção 2: Funções e Recursão (exercicíos 4 a 6)

// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    const cache = {}
  
    return function (...args) {
      const chave = JSON.stringify(args) // transforma os argumentos em string única
  
      if (cache[chave] !== undefined) {
        console.log("Resultado do cache!")
        return cache[chave]
      }
  
      const resultado = fn(...args)
      cache[chave] = resultado
      return resultado
    }
  }

  function fatorial(n) {
    if (n === 0) return 1
    return n * fatorial(n - 1)
  }
  
  const fatorialMemo = memoize(fatorial)
  
  console.log(fatorialMemo(5)) // Calcula normalmente
  console.log(fatorialMemo(5)) // Usa cache
  console.log(fatorialMemo(6))// Calcula usando o cache de fatorial(5)