let entrada = document.getElementById('tamanho')
let valorTamanho = document.getElementById('valor-tamanho')
let botao = document.querySelector('button')
let resultado = document.getElementById('div-resultado')
let botao_copiar = document.querySelector('#copiar')
let span_senha = document.querySelector('#senha')

let novo_resultado = ''

entrada.addEventListener('input', () => {
    valorTamanho.innerText = entrada.value
})

let minusculas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
]

let maiusculas = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
]

let simbolos = [
    '$', '#', '!', '¨', '%', '@', '*', '>', '<', '[', ']',
    '{', '}', '-', '_', "+", "/", '"', ';', '.', '^', '`',
    'ª', 'º', '§'
]

let numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let checkboxSimbolos = document.getElementById('simbolos')
let checkboxNumeros = document.getElementById('numeros')
let checkboxMaiusculas = document.getElementById('maiusculas')
let checkboxMinusculas = document.getElementById('minusculas')


botao.addEventListener('click', () => {
    let tiposDisponiveis = []
    let entrada_numero = Number(entrada.value)
    let caracteres = []

    if (checkboxMaiusculas.checked) {
        tiposDisponiveis.push(maiusculas)
    }

    if (checkboxMinusculas.checked) {
        tiposDisponiveis.push(minusculas)
    }

    if (checkboxNumeros.checked) {
        tiposDisponiveis.push(numeros)
    }

    if (checkboxSimbolos.checked) {
        tiposDisponiveis.push(simbolos)
    }

    if (tiposDisponiveis.length == 0) {
        resultado.innerText = 'Preencha algum tipo'
        return
    }

    for (let i = 0; i < entrada_numero; i++) {
        let tipoAleatorio = Math.floor(Math.random() * tiposDisponiveis.length)
        let tipo = tiposDisponiveis[tipoAleatorio]
        let aleatoriedade = Math.random() * tipo.length
        let arredondamento = Math.floor(aleatoriedade)

        caracteres.push(tipo[arredondamento])
    }

    novo_resultado = caracteres.join('')
    span_senha.innerText = novo_resultado
    botao_copiar.classList.remove('hidden')
    resultado.classList.remove('hidden')

    
})


botao_copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(novo_resultado)
})