let jogos = [{
    nome:  "The Witcher 3",
    imagem: "src/witcher.jpg",
    descricao: 'RPG mundo aberto',
},
{  
    nome: 'GTA 6',
    imagem: 'src/fundo-gta6.jpg',
    descricao: 'Mundo aberto de ação e aventura',
},
{
    nome: 'Call of Duty Mobile',
    imagem: 'src/cod-mobile.jpeg',
    descricao: 'Jogo de tiro em primeira pessoa'
}]

// Inserir cada jogo no card

for (let i = 0; i < jogos.length; i ++){
    let listaJogos = document.getElementById('lista-jogos')
    let card = document.createElement('div')
    card.className = 'card-item'
    let imagem = document.createElement('img')
    let nome = document.createElement('h3')
    let descricao = document.createElement('p')

    imagem.src = jogos[i].imagem
    nome.textContent = jogos[i].nome
    descricao.textContent = jogos[i].descricao

    card.appendChild(imagem)
    card.appendChild(nome)
    card.appendChild(descricao)
    

    listaJogos.appendChild(card)
}
    

