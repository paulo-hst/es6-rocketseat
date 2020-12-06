const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Péricles', idade: 43, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    { nome: 'Paulo', idade: 27, empresa: 'Enel' },
];

// MAP - Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idadeUsuarios = usuarios.map(item => item.idade)
console.log(`2.1 - Idade dos usuários: ${idadeUsuarios} `)

// FILTER - Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: 

const rocketseatUsuarios = usuarios.filter(item => item.idade >= 18 && item.empresa === 'Rocketseat')

console.log(`2.2 - Usuários da empresa Rocketseat maiores de idade: `)
for(let i = 0; i < rocketseatUsuarios.length; i++){
    console.log(`      Usuário: ${rocketseatUsuarios[i].nome} / Idade: ${rocketseatUsuarios[i].idade}`);
}

// FIND - Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const googleUsuarios = usuarios.find( item => item.empresa === 'Google');

if(googleUsuarios === undefined){
    console.log(`2.3 - Não existem usuários que trabalhem na empressa Google.`);
}else{
    console.log(`2.3 - Usuário: ${googleUsuarios.nome}`);
}

// Multiplique a idade de todos usuários por dois e depois realize um filtro
// nos usuários que possuem no máximo 50 anos:

const calculo = usuarios.map(item => ({...item, idade: item.idade * 2 }))
const filtroIdade = calculo.filter(item => item.idade <= 50)

console.log(`2.4 - Idade atualizada: `)
for(let i = 0; i < filtroIdade.length; i++){
    console.log(`      Usuário: ${filtroIdade[i].nome} / Idade: ${filtroIdade[i].idade}`);
}



