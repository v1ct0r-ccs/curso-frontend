let games = [
    {
        game: 'Stray',
        publisher: 'Annapurna',
        genero: 'Puzzle',
        plataformas: ['PlayStation', 'PC'],
        dateRelease: 2022,
        hltb: 5, // How Long To Beat (https://howlongtobeat.com/)
        metascore: 83, // Meta Critic (https://www.metacritic.com/)
    },
    {
        game: 'Cult of the Lamb',
        publisher: 'Devolver',
        genero: 'Roguelike',
        plataformas: ['PlayStation', 'PC', 'Switch', 'Xbox'],
        dateRelease: 2022,
        hltb: 13,
        metascore: 89,
    },
    {
        game: 'Hollow Knight',
        publisher: 'Team Cherry',
        genero: 'Metroidvania',
        plataformas: ['PlayStation', 'PC', 'Switch', 'Xbox'],
        dateRelease: 2017,
        hltb: 26,
        metascore: 90,
    },
    {
        game: 'Returnal',
        publisher: 'PlayStation',
        genero: 'Roguelike',
        plataformas: 'PlayStation',
        dateRelease: 2021,
        hltb: 20,
        metascore: 86,
    },
    {
        game: 'The Legend of Zelda: Breath of the Wild',
        publisher: 'Nintendo',
        genero: 'Aventura',
        plataformas: 'Switch',
        dateRelease: 2017,
        hltb: 50,
        metascore: 97,
    },
    {
        game: 'Cyberpunk 2077',
        publisher: 'CD Projekt RED',
        genero: 'Action',
        plataformas: ['PlayStation', 'PC', 'Stadia', 'Xbox'],
        dateRelease: 2020,
        hltb: 23,
        metascore: 86,
    },
    {
        game: 'Ori and the Will of the Wisps',
        publisher: 'Xbox',
        genero: 'Metroidvania',
        plataformas: ['PC', 'Switch', 'Xbox'],
        dateRelease: 2020,
        hltb: 11,
        metascore: 90,
    },
    {
        game: 'God of War',
        publisher: 'PlayStation',
        genero: 'Action',
        plataformas: ['PlayStation', 'PC'],
        dateRelease: 2018,
        hltb: 20,
        metascore: 94,
    },
    {
        game: "Hellblade: Senua's Sacrifice",
        publisher: 'Ninja Theory',
        genero: 'Hack and Slash',
        plataformas: ['PlayStation', 'PC', 'Switch', 'Xbox'],
        dateRelease: 2017,
        hltb: 7,
        metascore: 88,
    },
    {
        game: 'Hades',
        publisher: 'Supergiant Games',
        genero: 'Roguelike',
        plataformas: ['PlayStation', 'PC', 'Switch', 'Xbox'],
        dateRelease: 2020,
        hltb: 22,
        metascore: 93,
    },
]

function getGames(){
    return games
}

export default getGames()