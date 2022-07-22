# Gulp

Kit de ferramentas de automação de tarefas baseada em JavaScript

- Otimizar o fluxo de trabalho (desenvolvimento)
- Organização e orquestração de arquivos
- Ajuda a evitar trabalhs lentos e repetitivos
- Criação de pipelines
- Você cria as configurações necessárias (flexível)
- Tarefas escritas em JS ou plug-ins
- Aplica transformações em arquivos ainda na memória (antes de gravar no disco)

## Porquê automatizar?
- Melhor organização
- Evita repetição de tarefas
- Mais tempo para focar no mais importante: regras de negócios e experiência do usuário

## Principais recursos
- Mninificação de arquivos
- Otimização de imagens (para melhor performance)
- Mescla de arquivos de diferentes origens

## Transpilação para JS
É o processo de transformação (conversão) de escrita em outras liguagens para o JavaScript. Você poderá escrever em TypeScript ou Babel que o código.

TOdo o processo é executado a partir do  node.js e gulp-cli (linha de comando)

## Global x Local
- A instalação do Node.js é global
- Já o gulp e seus plugins são instalados localmente (em cada projeto)

## Gerenciadores de pacotes
- NPM: Node Package Manager
- Utiliza o Node.js
- Permite a configuração rápida e fácil de ambientes e plugins Node

## Instalando o Gulp
- Rodar o Node.js
- Instalar o gulp-cli (Command Line Interface) globalmente: npm install gulp-cli -g
- Agora na pasta do projeto, adicionar o npm: npm init -y
- Criar o Gulpfile.js

## Trabalhado com Gulp
- Baseado em funções: Tasks
- Organização do projeto
- Otimização de arquivos
- Mesclagem e Minificação de CSS e JS
- Diminuição do tamanho (bytes) de imagens