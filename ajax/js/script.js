
const url = 'https://api.github.com/users';
const main = document.getElementById('main')
// let user = 'v1ct0r-ccs'
let text = ''

function getUser(user) {

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text += `${data.name} possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}<br>`
            main.innerHTML = text
        })
        .catch((error) => console.error('Erro: ', error.massage || error))

}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})