class Usuario{
    constructor(login,senha){
        this.login = login;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
        return this.login;
    }
}

class Admin extends Usuario{
    constructor(login,senha){
        super(login,senha);
        this.admin = true;
    }
}

const usuario1 = new Usuario("pauloh", "senha123");
const admin1 = new Admin("henriquet", "senha321");

// Operador ternário: condition ? expr1 : expr2 
usuario1.isAdmin() === false ? console.log(`O usuário ${usuario1.login} NÃO é um administrador`) : console.log(`O usuário ${usuario1.login} é um administrador`);
admin1.isAdmin() === false ? console.log(`O usuário ${admin1.login} NÃO é um administrador`) : console.log(`O usuário ${admin1.login} é um administrador`);
