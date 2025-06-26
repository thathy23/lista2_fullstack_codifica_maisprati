// Seção 2: Funções e Recursão (exercicíos 4 a 6)

// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timerId = null
  
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId)// para cancelar a execução anterior
      }
  
      timerId = setTimeout(() => {
        fn(...args)// para executar a função depois do delay
      }, delay)
    }
  }

  function dizerOla(nome) {
    console.log(`Olá, ${nome}!`)
  }
  
  const dizerOlaDebounce = debounce(dizerOla, 1000)
  
  
  dizerOlaDebounce("Tati")
  setTimeout(() => dizerOlaDebounce("Bruno"), 300)
  setTimeout(() => dizerOlaDebounce("Carlos"), 600)
  setTimeout(() => dizerOlaDebounce("Jaques"), 1500)
  