# Bootstrap
- Framework ou biblioteca de desenvolvimento
- Modular
- Componentees de risco
- CCS +JS
- Grid System
- Rensponsivo
- Mobile-first
- Amplamente utilizada
- Cross Browser

## Biblioteca x Framework
- Biblioteca: oferece objetos / classes prontas para uso
- Framework: oferece um conjunto de bibliotecas

- Biblioteca: recurso para trabalhar
- Framework: metodologia de trabalho

- Biblioteca: te leva ao destino
- Framework: te ensina a chegar

## Desenvolvimento ágil
- Metodologias: Scrum, Kanban, XP
- Entrega de valor para o negócio
- Ciclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas
- MVP - Minímo Produto Viável
- Estar envolvido x comprometido

## Vantagens
- Uso simples
- Menos códigos
- Abstração de estilos
- Documentação completa: https://getbootstrap.com/

## Desvantagens
- Uso excessivo
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap
```
<a class="btn btn-lg">Botão</a>
```
### Sem Bootstrap
```
<a class="botao botao-grande">Botão</a>

<style>
html {
    font-size: 62.5%
}

.botao {
    background-color: #ccc; 
    border-radius: 2px; 
    display: block;
    font-family: sans-serif;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    margin: 5px auto;
    ...
 }

 .botao.grande {
    font-size: 2rem;
 }

 .botao:hover { ... }
 .botao:active { ... }
 .botao:visited { ... }
 
 </style>