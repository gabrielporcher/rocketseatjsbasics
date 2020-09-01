// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout (() => {resolve('OK')}, 2000)
// })

// async function executaPromise() {
//      console.log(await minhaPromise())
//      console.log(await minhaPromise())
//      console.log(await minhaPromise())
//  }

// const executaPromise = async () => {
//     console.log(await minhaPromise())
// }


// executaPromise();

// import axios from 'axios';

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);
//         } catch (e) {
//             console.warn('Erro na api')
//         }
//     }
// }

// Api.getUserInfo('diego3g')

//EXERCÍCIOS
import axios from 'axios';
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    try{
        await delay();
        console.log('1s')

        await delay();
        console.log('2s')

        await delay();
        console.log('3s')
    } catch (e) {
        console.log("Error")
    }
}

umPorSegundo();

async function getUserFromGit(user) {
    try{
        const response = axios.get(`https://api.github.com/users/${user}`);
        console.log(response)
    } catch (e) {
        console.log('User not found')
    }
}

getUserFromGit('diego3g');
getUserFromGit('diego3g124123');

const buscaUsuario = async usuario => {
    try {
        const response = axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response)
    } catch (e){
        console.log('Usuario n encontrado')
    }

}

buscaUsuario('diego3g');

