/*
console.log("Exercício 3.1");

const arr = [1, 2, 3, 4, 5];
console.log(`3.1 - ${arr.map( item => item + 10)}`)
console.log()


console.log("Exercício 3.2");

const usuario = { nome: 'Paulo', idade: 27 };

const mostraIdade = usuario => usuario.idade ;
console.log(`3.2 - Idade: ${mostraIdade(usuario)}`)

console.log("Exercício 3.3");

const nome = "Paulo";
const idade = 27;

const mostraUsuario = (n,i = 0) => ( {n, i} )
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

console.log("Exercício 3.4");

const promise = () => new Promise( ( resolve,reject ) => resolve() )


console.log("Exercício 4.1 - Desestruturação simples");

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);



console.log("Exercício 4.2 - Desestruturação simples");

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
   }

console.log(mostraInfo({ nome: 'Paulo', idade: 27 }));



console.log("Exercício 5.1 - REST");

const arr = [1,2,3,4,5,6];

const [x,...y] = arr;
console.log(x);
console.log(y);

function soma(...vetorRecebido){
    return n.reduce( (valorAtualDoVetor, proximoValorDoVetor) => valorAtualDoVetor + proximoValorDoVetor );
}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));


console.log("Exercício 5.2 - SPREAD");

const usuario = {
    nome: 'Paulo',
    idade: 23,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        pais: 'Brasil'
    }
}

const usuario1 = { ...usuario, nome: 'Gabriel' };
console.log(usuario1)
console.log(usuario1.nome)

const usuario2 = { ...usuario, endereco: { cidade: 'Niterói' }};
console.log(usuario2.endereco.cidade);

console.log("Exercício 6 - Template Literals");

const usuario = {
    nome: 'Paulo',
    idade: 27,
}

const { nome, idade } = usuario;

console.log('O usuário ' + nome + ' possui ' + idade + ' anos.');
console.log(`O usuário ${nome} possui ${idade} anos.`)

*/

console.log("Exercício 7 - Template Literals");

const nome = 'Paulo';
const idade = 27;

const usuario = {
    nome, // nome: nome,
    idade, // idade: idade,
    cidade: 'Rio de Janeiro',
}

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);