import api from './api';

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event); // Arrow Function com um parâmetro e uma linha
    }

    setLoading(loading = true){
        if(loading === true){
            // cria texto Carregando
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando ...'));
            loadingEl.setAttribute('id', 'loading');
            
            // adiciona texto Carregando no formulário
            this.formEl.appendChild(loadingEl);
        }else{
            // caso o loading seja falso (finaliza carregamento), remove o elemento da tela
            document.getElementById('loading').remove();
        }
    }

    // adiciona repositorio no array
    async addRepository(event){
        event.preventDefault(); // evitar que o HTML carregue a página ao submit

        const repoInput = this.inputEl.value;

        // verifica se algo foi digitado no input
        if(repoInput.lenght === 0){
            return; // a função não faz nada. para de executar no return
        }

        this.setLoading();

        try{
            // realiza a requisição assíncrona
            const response = await api.get(`/repos/${repoInput}`);

            // desestruturação   
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            
            this.render();

        } catch(erro){
            alert('Repositório não encontrado');
        }

        this.setLoading(false); // remove a mensagem de carregando na tela ao finaliza requisição

    }

    // renderiza os elementos em tela.
    render(){
        this.listEl.innerHTML = ''; // apagar o conteúdo da tela
        this.repositories.forEach(repo => { // percore o array
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.appendChild(document.createTextNode('Acessar Repositório'));
            linkEl.setAttribute('href', repo.html_url);
            linkEl.setAttribute('target', '_blank');

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
            
            this.inputEl.value = ''; // apaga conteúdo da caixa input
        });
    }
}

// const meuApp = new App(); > pode ser utilizado 
new App();