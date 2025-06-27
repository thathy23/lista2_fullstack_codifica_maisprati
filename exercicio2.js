// Seção 1: Estruturas de Controle Avançadas(exercicíos 1 a 3)

// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.


const prompt = require('prompt-sync')()

const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0

console.log("Adivinhe o número secreto! Dica: está entre 1 e 100")

while (true) {
  const input = prompt("Digite um número: ")
  const palpite = parseInt(input);
  tentativas++;

  if (isNaN(palpite)) {
    console.log("Por favor, digite um número válido.")
    continue
  }

  if (palpite < numeroSecreto) {
    console.log("Mais alto!");
  } else if (palpite > numeroSecreto) {
    console.log("Mais baixo!");
  } else {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`)
    break
  }
}