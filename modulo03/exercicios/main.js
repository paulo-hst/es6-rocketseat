/* 

*** Exercício 01 ***
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
            console.log('3s');
            });
        })
    });
}

*/


/*
const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}

OU

*/
/*
async function umPorSegundo(){
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}

umPorSegundo();
*/

/*
*** Exercício 02 ***

import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

*/
/*
import axios from 'axios';

class Api{


    static async getUserFromGithub(user){
        try{
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response.data.login);
        } catch(erro){
            console.warn('ERRO NA API')
        } 
    }
}

Api.getUserFromGithub('paulohst');
Api.getUserFromGithub('paulohasst');
*/

/*

*** Exercício 03 ***
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
        })
    
        .catch(err => {
            console.log('Repositório não existe');
        })
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

import axios from 'axios';

class Github {
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        }catch(erro){
            console.warn("ERRRO NA API")
        }
        
    }
}

Github.getRepositories('pandas-dev/pandas')
*/

/*
*** Exercício 04 ***

const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    });
}

buscaUsuario('diego3g');

*/

import axios from 'axios';

class Api{
    static async buscaUsuario(user){
        try{
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(`Usuário pesquisado: ${response.data.login}.`);
        }catch(erro){
            console.log(`Usuário não encontrado na base de dados.`)
        }
    }
}

Api.buscaUsuario('paulohst');
Api.buscaUsuario('EvenFlowers');

   