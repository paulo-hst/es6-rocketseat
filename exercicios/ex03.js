// 3.1

const arr = [1, 2, 3, 4, 5];
console.log(`3.1 - ${arr.map( item => item + 10)}`)
console.log()

// 3.2

const usuario = { nome: 'Paulo', idade: 27 };

const mostraIdade = usuario => usuario.idade ;
console.log(`3.2 - Idade: ${mostraIdade(usuario)}`)

// 3.3

const nome = "Paulo";
const idade = 27;

const mostraUsuario = (n,i = 0) => ( {n, i} )
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))


// 3.4

const promise = () => new Promise( ( resolve,reject ) => resolve() )