// Seção 3: Arrays e Objetos Complexos (exercicios 7 a 9)

// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
    const obj = {}
    for (let i = 0; i < pares.length; i++) {
      const chave = pares[i][0]
      const valor = pares[i][1]
      obj[chave] = valor
    }
    return obj;
  }
    
  function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
      if (obj.hasOwnProperty(chave)) {
        pares.push([chave, obj[chave]])
      }
    }
    return pares
  }
  const arrayPares = [['nome', 'Tati'], ['idade', 40], ['cidade', 'JP']];
  const obj = paresParaObjeto(arrayPares)
  console.log(obj)
  
  const arrayDePares = objetoParaPares(obj)
  console.log(arrayDePares)
    