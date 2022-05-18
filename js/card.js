'use strict'

//Os elementos criados aqui não são vistos pelo o html e se não estiverem no mode: open

class card extends HTMLElement {
    constructor(){
        super();
        this.build()
    }
    build (){
        const shadow = this.attachShadow({mode: 'open'})
        //função que vai criar o style do card
        shadow.appendChild(this.styles())
        //função responsável por criar card
        shadow.appendChild(this.createCard())
    }

    styles(){
        const style = document.createElement('style')

        style.textContent = `
            .card{
                width: 250px;
                height: 250px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                background-color: ${this.bgcolor()};
            }
            
            .card-text{
                width: 50%;
                padding: 4px;
                text-align: center;
                color: #fff;
                text-transform: uppercase;
                border-radius: 5px;
                box-shadow: 0 0 2px #000;
            }
            
            .card-image{
                width: 50%;
                height: 50%;
                border-radius: 50%;
                background-image: url(${this.bgimagemAluno()});
                background-size: cover;
                /*borda interna*/
                box-shadow: inset 0 0 10px #000 ;
            }`

        return style;
    }

    createCard(){
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <div class="card-text">${this.nome()}</div>
            <div class="card-image"></div>
            <div class="card-text">${this.turma()}</div>
        `

        return card
    }

    bgcolor(){
        //Se não tiver nenhuma cor atribuida usa a cor padrão
        const color = this.getAttribute('data-bgcolor') ?? '#00f'
        return color
    }

    nome(){
        const nome = this.getAttribute('data-nome') ?? 'aluno'

        return nome
    }

    turma(){
        const turma = this.getAttribute('data-turma') ?? 'turma'

        return turma
    }

    bgimagemAluno(){
        const imagemAluno = this.getAttribute('data-foto') ?? './img/semfoto.png'

        return imagemAluno
    }

    alturaCard(){
        const altura = this.getAttribute('data-height')

        return altura
        
    }


}

//Vai colocar no html 
customElements.define('card-aluno', card)