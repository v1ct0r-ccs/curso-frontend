import { months } from "./months";

// Filter
let filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

// Listagem
filteredMonths.forEach(months => {
    toPrint += months.months + ', '
});

//for( let c =  0; c < filteredMonths.length; c++ ){

//}

// Reduce - executa função com todos os intens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9]

let year = cachorros.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = toPrint + '<br> Soma dos dias dos meses selecionados: ' + sumMonthDays.days + '<br> Em 7 anos tem: ' + years + 'dias'