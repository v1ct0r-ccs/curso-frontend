### Funcionalidades gerais
- Cria algoritimos e programas para executar no navegador: client side
- Manipular o DOM: elementos HTML, eventos (clique, submit), estilos CSS
- Node.js: framework JS para back-end / runtime em JS
- Mongo.db / GraphQL: banco de dados em JS
- React / Vue.js / Angular: frameworks JS para desenvolvimento web / mobile
- React Native: framework JS para desenvolvimento mobile

- receber e manipular dados
- tomar decisões baseados na lógica computacional
- loop e interações
- condições de saída

### Executar o JS
- console browsers
- Editores: Sublime, Visual Studio Code
- Js Fiddle https://jsfiddle.net/

### Algoritimo para calcular a média de 3 números
1. Inicio;
2. Receber o primeiro número: entrada 1;
3. Receber o segundo número: entrada 2;
4. Receber o terceiro número: entrada 3;
5. PROCESSAMENTO: Somar os 3 números recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3) / 3;
6. Exibir o resultado: print, echo, console.log;
7. Fim;

### Variáveis
- var
- const (constante fica com o valor imutável)
- let
- string (tipo de variável)
- tipagem: número ou string
- array: conjunto de valores 
- .length (para saber quantas atribuições existem na array, contando apartir do 0)

### Operadores
- Soma +
- Subitração - 
- multiplicação *
- Divisão /
- Módulo (resto da divisão) %
- Math: random (), round(arendondar o numero), sqrt().

* Atribuição
a = b
a += b
a -= b
a *= b
a /= b
a %= b
adiciona 1: ++
subtrai 1: --

* Operadores de Comparação
- Igual == ou ===
- Diferente !=
- Maior que >
- Menor que <
- Maior/Menor ou igual que >= / <=

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Expressions_and_operators

## Comparadodores Lógicos: teste lógico, retorno booleano (true / false)
== igualdade entre sentenças (valor)
!= diferença entre sententenças (valor)
=== iguldade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

a == b = true
a != b = false

* Atribuição
a = b
a = 4

## Operadores de lógica e junção lógica
! NÃO (NOT)
&& E (AND)
|| OU (OR)

O sinal de de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

#### Exemplos:

a != b      // o valor de a é diferente de b
x !== y    // o valor e o tiopo de x são diferentes de y

#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição

tem a capacidade de atribuir valor a uma variaável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";

## If
if (...) {

}

* Exemplo
if (cor == "preto") meuCarro = "preto"
if (cor != "preto") meuCarro = "cinza"
if (cor == "cinza"){
    meuCarro = "branco";
    console.log(meuCarro)
}

## Else
else {
    
}

* Exemplo
if (cor == "preto"){
    meuCarro = "preto";
} else {
    meuCarro = cinza";
}

## Else if
else if (...) {

}

Ele para de executar o codigo apos encontrar a primeira coincidencia

* Exemplo
if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else {
    meuCarro = "azul";
}

## Switch

Ele não para de executar o código até acabar; para evitar isso e parar a execução do código tem que adicionar "break" ao final de cada case.

switch (cor) {
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break;
    case 'amarelo' :
        meuCarro = 'amarelo';
        break;
    default :
        console.log('não temos a cor desejada');
}

## Media
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7.5;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if( media > 8 ) {
    console.log("aluno aprovado")
} else {
    console.log("aluno e recuperação")
}

### Cálculo de média de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
]

var nota = 0
for (var i = 0; i < alunos.length; i++){

    nota = 0
    aluno = alunos[i]
    console.log("Aluno: " aluno);

    for( c = 0; c < aluno.lenth; c++ ){
        nota += aluno[c]
    }
    media = nota / 4;

    if (media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado"
    }
        
    console.log("Media: " + media + " - " + resultado);
}
## Laços de Repetição


for ([expressaoInicial]; [condicao]; [incremento])

while ( [condicao] ){
    [execucao]
}

var contador = 0;
while( contador < 10) {
    contador++
}

var hora = 24;
while (hora > 0){
    hora--;
    console.log(hora);
}


do {
    execucao
} while (condição)


// fazer revisão do carro aos 10 km //

var km;
var revisão = 10;

for(km = 0; km < 10; km++ ){
    console.log("apenas" + km + "kms entao pode rodar")
}

## Funções
- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calcularMedia( notas ) {
    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c]
    }

    media = soma / notas.length

    return media;

}

function aprovacao ( media ) {
    
    let codicao = media >= 7 ? "aprovado" : "reprovado";

    return condicao;
}

console.log( "Média: " + calcularMedia ([8, 8]))
console.log( aprovacao( calcularMedia([8, 8])))

console.log( "Média: " + calcularMedia ([8, 8, 10]))
console.log( aprovacao( calcularMedia([8, 8, 10])))

console.log( "Média: " + calcularMedia ([9, 6]))
console.log( aprovacao( calcularMedia([9, 6])))


- chamar função dentro de outra função

function calcularMedia( notas ) {
    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c]
    }

    media = soma / notas.length

    return media;

}

let media; // escopo global

function aprovacao ( notas ) {
    
    let media = calcularMedia( notas ); // escopo local

    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;
}

console.log( aprovacao([8, 8, 7]));

console.log( aprovacao([8, 8, 10, 6]));

console.log( aprovacao([9, 6, 7]));