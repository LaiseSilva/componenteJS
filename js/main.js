'use strict'


const url = 'https://testeleonid.herokuapp.com/alunos'

const readAlunos = async () => {
    const response = await fetch(url)
    return response.json()
}

const criarCardAluno = (aluno) => {
    const cardAluno = document.createElement('card-aluno')
    cardAluno.dataset.nome = `${aluno.nome}`
    cardAluno.dataset.turma = `${aluno.turma}`
    cardAluno.dataset.foto = `${aluno.foto}`
    return cardAluno
}


const carregarCard = async () => {
    const container = document.querySelector('.container-card')

    const alunos = await readAlunos()

    const cardAlunos = alunos.map(criarCardAluno)

    container.replaceChildren(...cardAlunos)
}

carregarCard()
