/* - AJAX -

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g')
xhr.send(null)

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
}
*/

/* - PROMISES -
var minhaPromise = function() {
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

minhaPromise().then(function(response) {
    console.log(response)
})
.catch(function(error){
    console.warn(error)
})
*/

/* - AXIOS -
axios.get('https://api.github.com/users/diego3g').then(function(response) {
    console.log(response)
})
.catch(function(error){
    console.warn(error)
})
*/

//EXERCICIO 1 - MODULO 04
function checaIdade(idade) {
    setTimeout(2000)
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            setTimeout(resolve('Maior de idade'), 2000)
        } else {
            setTimeout(reject('Menor de idade'), 2000)
        }
    })
}

checaIdade(2).then(function () {
    console.log('Maior de 18')
})
    .catch(function (error) {
        console.log(error)
    })

//EXERCICIO 2 E 3 - MODULO 04
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var listElement = document.querySelector('#app ul')


function showName() {
    var value = inputElement.value;

    loading()
    getRepos(value)

    inputElement.value = '';
}

function loading(){
    listElement.innerHTML = '';
    var todoElement = document.createElement('li')
    var msg = 'Carregando...'
    var text = document.createTextNode(msg)
    todoElement.appendChild(text)
    listElement.appendChild(todoElement)
}

function getRepos(nome) {
    listElement.innerHTML = '';
    var link = `https://api.github.com/users/${nome}/repos`
    axios.get(link).then(function (response) {

        for (r of response.data) {
            var todoElement = document.createElement('li')
            var text = document.createTextNode(r.name)

            todoElement.appendChild(text)
            listElement.appendChild(todoElement)
        }

        })
        .catch(function (error) {
            var todoElement = document.createElement('li')
            var msg = 'Usuario não encontrado'
            var text = document.createTextNode(msg)

            todoElement.appendChild(text)
            listElement.appendChild(todoElement)
        })
}

buttonElement.onclick = showName