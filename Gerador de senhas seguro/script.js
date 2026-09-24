let entrada = document.getElementById('tamanho') // É um elemento HTML
let botao = document.querySelector('button')
let resultado = document.getElementById('div-resultado')


let minusculas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
]




botao.addEventListener('click', () => {
    let entrada_numero = Number(entrada.value) // É o número lido que preciso converter
    let letras = []
    for (let i = 0; i < entrada_numero; i ++){
        let aleatoriedade = Math.random() * minusculas.length
        let arredondamento = Math.floor(aleatoriedade)
        letras.push(minusculas[arredondamento]) // o método push retorna o tamanho do array, mas não estou guardando isso, estou adicionando as letras
        
}

 let novo_resultado = letras.join('')
 resultado.innerText = novo_resultado
    //resultado.innerText = entrada.value
})


//navigator.clipboard.writeText('')
