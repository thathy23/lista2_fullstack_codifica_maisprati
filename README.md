# lista2_fullstack_codifica_maisprati

#Lista 2 de exercícios com javascript
Fullstack_codifica_+prati


#Seguem instruções para executar os codigos localmente:

Usaremos Node.js:
Com o Node podemos rodar JavaScript fora do navegador, ele é amplamente utilizado no desenvolvimento backend, permitindo escrever JavaScript no servidor.

É leve, rápido e eficiente, podendo ser utilizado para projetos pequenos ou grandes.

Muito bom para iniciantes praticarem Javascript.

#Instalando o Node.js:
Acesse: https://nodejs.org/

Baixe a versão LTS (recomendada).

Instale seguindo as instruções da sua plataforma (Windows, macOS ou Linux).

#Verifique se está instalado, digite no terminal:

node -v

npm -v

O npm (node package manager) é o gerenciador de pacotes, ele ja vem junto com o node nao precisa instalar separadamente. Com ele iremos instalar as bibliotecas necessárias, conforme a seguir:

#Biblioteca prompt-sync:
Com o prompt-sync recebemos os inputs (entrada de dados) do usuário de forma síncrona no terminal, algo que o Node.js puro não faz diretamente de forma simples.

A leitura de dados se dá de forma intuitiva e síncrona.

Ideal para iniciantes, exercícios e projetos interativos no terminal.

#Instalando o prompt-sync:
No seu projeto, abra o terminal e digite o seguinte comando:

npm install prompt-sync

#Exemplo usando um editor de texto, pode ser o VSCode:

const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: '); console.log(Olá, ${nome}!);

#LISTA 2 - EXERCÍCIOS(1 ao 9):

Seção 1: Estruturas de Controle Avançadas
1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.
2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.

Seção 2: Funções e Recursão
4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.
5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.
6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.

Seção 3: Arrays e Objetos Complexos
7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.
9. Conversão Entre Formatos
Escreva duas funções:

○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.

