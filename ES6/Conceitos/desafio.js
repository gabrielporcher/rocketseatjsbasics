/*
//Exercício 1
class Usuario {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  
    isAdmin() {
      return this.admin === true;
    }
  }
  
  class Admin extends Usuario {
    constructor(email, senha) {
      super(email, senha);
  
      this.admin = true;
    }
  }
  
  const User1 = new Usuario("email@teste.com", "senha123");
  const Adm1 = new Admin("email@teste.com", "senha123");
  
  console.log(User1.isAdmin());
  console.log(Adm1.isAdmin());

// Exercício 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(item => item.idade);
console.log(idades)

const maiores = usuarios.filter(item => item.idade > 18 && item.empresa == 'Rocketseat')
console.log(maiores)

const google = usuarios.find(item => item.empresa == 'Google')
console.log(google)

const unirOp = usuarios.map(item => ({...item, idade: item.idade * 2})).filter(item => item.idade <= 50)
console.log(unirOp)

//Exercício 3
const arr = [1, 2, 3, 4, 5];

const dez = arr.map(item => item + 10)
console.log(dez)

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 23) => ({nome, idade})
console.log(mostraUsuario(nome,idade))
console.log(mostraUsuario(nome));

const promise = () => new Promise ((resolve,reject) => resolve());


//Exercício 4
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa
console.log(nome)
console.log(cidade)
console.log(estado) 

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
  
mostraInfo({ nome: "Diego", idade: 23 });

//Exercício 5
const arr = [1,2,3,4,5,6];
const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(10, 20, 30, 40))

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'}
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}}
console.log(usuario2)
console.log(usuario3)
*/

//EXERCÍCIOS 6 E 7
const nome = 'Diego';
const idade = 23;

console.log(`O usuario ${nome} possui ${idade} anos`);

const user = {
    nome,
    idade,
    cidade: 'Rio do Sul'
}

console.log(user)