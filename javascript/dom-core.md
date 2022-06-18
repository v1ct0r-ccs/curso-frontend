# DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programação
- NÃO é uma linguagem de programação
- É essencial para o JS enter o modelo de página web

## Para que serve?
- Alterar a estrutura
- Alterar o estilo
- Alterar o conteúdo

## Como isso acontece?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós / nodes)

## Exemplo Html
<html>
    <head></head>
    <body></body>
</html>

## Exemplo Objeto
objeto = {
    html : {
        head : {},
        body : {
            h1 : {

            }
        }
    }
}

## DOM x JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar JavaScript
- Código é executado por navegadores
- Tornar as paginas dinâmicas
- Evitar Requisições desnecessárias (performance)
- SPA ( Single Page Application)
- Reagir rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript
- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento

### Exemplos
Seleciona o objeto e disponibiliza (métodos / funções).callback

- document.getElementById(id)
- document.getElementByTagName('dic')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name')
- element.getAttribute('name')
- element.addeventListener()
- window.location
- window.onload (en-US)
- console.log()
- window.scrollTo(x, y)

## Seletores
- Tiposde seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById()
- getElementesByTagName()
- getElementsByName()
- getElementsByClassName()
- querySelectorAll() // #id | .class

## Formulários
- Precisamos evitar que o usuário passe dados incorretos
- Ou seja, para direcionar melor o uso do nosso sistema
- Proteger a injeção de código malicioso
- Evitar erros de processamento
- Formatar dados para facilitar o processamento
- Regex (expressões regulares)

### Referências
- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderizar%C3%A7%C3%A3o
- Expressões Regulares: https://developer.mozilla.org/pt-Br/docs/Weeb/JavsScript/Guide/Regular_Expressions
