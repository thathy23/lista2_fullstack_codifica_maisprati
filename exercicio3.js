// Seção 1: Estruturas de Controle Avançadas(exercicíos 1 a 3)

// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(texto) {
    const palavras = texto.split(" ")
    const unicas = []
  
    for (let i = 0; i < palavras.length; i++) {
      let palavraAtual = palavras[i]
      let contador = 0
  
      for (let j = 0; j < palavras.length; j++) {
        if (palavras[j] === palavraAtual) {
          contador++
        }
      }
  
      if (contador === 1) {
        unicas.push(palavraAtual);
      }
    }
  
    // Verifica se o array está vazio
    if (unicas.length === 0) {
      console.log("Não há palavra única.");
    } else {
      console.log("Palavras únicas:", unicas);
    }
  
    return unicas;
  }  
  
  const frase1 = "olá olá mundo mundo"
  palavrasUnicas(frase1)
  
  const frase2 = "teste mundo olá mundo teste único exemplo"
  palavrasUnicas(frase2)
  