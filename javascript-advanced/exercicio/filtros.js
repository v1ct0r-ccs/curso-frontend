import { games } from "./games";

let filteredGames = games.filter ( (games)=> {
    return games.plataformas = 'PlayStation'
})
console.log(filteredGames)

let generoGames = games.filter ( (games)=> {
    return games.genero = 'Roguelike'
})
console.log(generoGames)

let scoreGames = games.filter ( (games)=> {
    return games.metascore += 90
})
console.log(scoreGames)

let timeGames = games.filter ( (games)=> {
    return games.hltb += 20
})
console.log(timeGames)


let toPrint = ''
games.forEach(games => {
    toPrint += games.games + ', '
});