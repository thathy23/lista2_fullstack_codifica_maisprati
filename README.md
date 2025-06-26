# lista2_fullstack_codifica_maisprati

Lista 2 de exercícios com javascript
Fullstack_codifica_+prati


Seguem instruções para executar os codigos localmente:

Usaremos Node.js:
Com o Node podemos rodar JavaScript fora do navegador, ele é amplamente utilizado no desenvolvimento backend, permitindo escrever JavaScript no servidor.

É leve, rápido e eficiente, podendo ser utilizado para projetos pequenos ou grandes.

Muito bom para iniciantes praticarem Javascript.

Instalando o Node.js:
Acesse: https://nodejs.org/

Baixe a versão LTS (recomendada).

Instale seguindo as instruções da sua plataforma (Windows, macOS ou Linux).

Verifique se está instalado, digite no terminal:

node -v

npm -v

O npm (node package manager) é o gerenciador de pacotes, ele ja vem junto com o node nao precisa instalar separadamente. Com ele iremos instalar as bibliotecas necessárias, conforme a seguir:

Biblioteca prompt-sync:
Com o prompt-sync recebemos os inputs (entrada de dados) do usuário de forma síncrona no terminal, algo que o Node.js puro não faz diretamente de forma simples.

A leitura de dados se dá de forma intuitiva e síncrona.

Ideal para iniciantes, exercícios e projetos interativos no terminal.

Instalando o prompt-sync:
No seu projeto, abra o terminal e digite o seguinte comando:

npm install prompt-sync

#Exemplo usando um editor de texto, pode ser o VSCode:

const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: '); console.log(Olá, ${nome}!);

LISTA 2 - EXERCÍCIOS(1 ao 9):
