/*
// Operações em array
const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item, index) {
    return item + index;
})

console.log(newArr)

const sum = arr.reduce(function(total, next) {
    return total + next;
})

console.log(sum)

const filter = arr.filter(function(item) {
    return item % 2 === 0;
})

console.log(filter)

const find = arr.find(function(item) {
    return item === 4;
})

console.log(find)

//Arrow Functions
const novoArr = [1,3,4,5,6]

const newArrArow = novoArr.map(item => item * 2) //retorno implícito
console.log(novoArr)

const teste = () => 'teste ok'
console.log(teste())

//Destructuring
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC'
    }
}

const {nome, idade, endereco: {cidade}} = usuario;
console.log(nome, idade, cidade)

function mostraNome(usuario) {
    console.log(usuario.nome)
}

function mostraNome2({nome, idade}) {
    console.log(nome,idade)
}
mostraNome(usuario)
mostraNome2(usuario)

// REST
const user = {
    nome: 'Diego',
    idade: 23,
    empresa: 'rocket'
};

const {nome, ...resto} = user;
console.log(nome)
console.log(resto)

const arr = [1,2,3,4]
const [a,b, ...c] = arr

function soma(a,b,...params) {
    return params;
}
console.log(soma(1,3,4,5,7,8))

//SREAD
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'rocketseat'
}

const usuario2 = {...usuario1, nome: 'Gabriel'}
console.log(usuario2)
*/

// Object Short Syntax
const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'rockets'
}
console.log(usuario)