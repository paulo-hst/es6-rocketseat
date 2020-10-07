"use strict";

var nome = 'Paulo';
var idade = 27;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio de Janeiro'
};
console.log(usuario)
/*
const usuario = {
    nome: 'Paulo Henrique',
    idade: 27
}

console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos`);
*/

/*

// REST
const usuario = {
    nome: 'Paulo',
    idade: 27,
    cidade: 'Rio de Janeiro'
}

const { nome, ...resto } = usuario;

console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...resto ] = arr;

console.log(a);
console.log(b);
console.log(resto);

function soma(...params){
    return params.reduce(( total, proximo ) => total + proximo);
}

console.log(soma(1,2,3,4,5,6))

// SPREAD

const array1 = [10, 20, 30];
const array2 = [40, 50, 60];

const arrayTotal = [ ...array1, ...array2 ];

console.log(arrayTotal);

const usuario1 = {
    nome: 'Paulo',
    idade: 27,
    cidade: 'Rio de Janeiro'
}

const usuario2 = { ...usuario1, nome: 'Henrique' }

console.log(usuario1);
console.log(usuario2);



*/

/*

const usuario = {
    nome: 'Paulo',
    idade: 27,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

 const { nome, idade, endereco: { cidade, estado } } = usuario; 

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);



function mostrarNome({ nome , idade }) {
    return console.log("Nome: " + nome + " / Idade: " + idade)
}

mostrarNome(usuario);   

*/

/*function soma(a = 0,b = 2){
    return a + b;
}

console.log(soma());

const mult = (a = 2, b = 5) => a*b;

console.log(mult(1));
*/

/* const vetor = [1,2,4,6];

const novoVetor = vetor.map(item => item * 2);

console.log(novoVetor)

const teste = () => ({ nome: 'Paulo'})

console.log(teste());
 */

/* const vetor = [1,3,4,6,7,12]

const vetorMap = vetor.map(function(item, indice){
    return item * indice;
});

console.log(vetor);
console.log(vetorMap);

const vetorReduce = vetor.reduce(function(total, proximo){
    return total + proximo;
});

console.log(vetor);
console.log(vetorReduce);

const vetorFilter = vetor.filter(function(item){
    return item % 2 !== 0;
});

console.log(vetor);
console.log(vetorFilter); // impares

const vetorFind = vetor.find(function(item){
    return item === 5; // undefined (não encontrou)
});

console.log(vetor);
console.log(vetorFind); */

/* const vetor = [1,2,3];

vetor[0] = 3;

console.log(vetor);


function teste(x){
    let y = 2;

    if(x > 5){
        let y = 50;
        console.log(x,y);
    }
}
// console.log(y);  Erro
teste(10) */
;
/* class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = ['Paulo'];
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const Todos = new TodoList();
const btn = document.getElementById('btn');

btn.onclick = function(){
    Todos.add('Estudar');
    Todos.mostraUsuario();
}
*/

/*  
// Static não é instanciável. apenas serve de auxilio
class Matematica{
    static soma(a,b){
        return a*b;
    }
}

console.log(Matematica.soma(1,2)); 
*/
