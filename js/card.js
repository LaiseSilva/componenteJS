'use strict'

//Os elementos criados aqui não são vistos pelo o html e se não estiverem no mode: open

class card extends HTMLElement {
    constructor(){
        super();
        //this.build()

        this.shadow = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.shadow.appendChild(this.styles())
        this.shadow.appendChild(this.createCard())
    }

    // build (){
    //     const shadow = this.attachShadow({mode: 'open'})
    //     //função que vai criar o style do card
    //     shadow.appendChild(this.styles())
    //     //função responsável por criar card
    //     shadow.appendChild(this.createCard())
    // }

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
                transition: all 1s;
            }

            .card:hover{
                cursor:pointer;
                transform:scale(1.2);
                box-shadow: 0px 0px 20px #000a;
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
        let color = this.getAttribute('data-bgcolor') ?? '#00f'

        if(color == 'reprovado')
            color = '#cc0000'
        else if(color == 'aprovado')
            color = '#008000'
        else if(color == 'desistente')
            color = '#878787'
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



}

//Vai colocar no html 
customElements.define('card-aluno', card)