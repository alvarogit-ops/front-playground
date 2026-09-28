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

    function ForcadaSenha(senha){
    let pontos = 0

    if (senha.length >= 6) pontos ++
    if (senha.length >= 12) pontos ++
    if (/[A-Z]/.test(senha)) pontos ++
    if (/[a-z]/.test(senha)) pontos ++
    if (/[^A-Za-z0-9]/.test(senha)) pontos ++

    if (pontos <=2) return 'Fraca'

    if (pontos <=4) return 'Mediana'

    return 'Forte'
}


let forca = ForcadaSenha(novo_resultado)
let elementoForca = document.getElementById("forca")
elementoForca.innerText = 'Força' + forca

elementoForca.classList.remove('text-red-600', 'text-yellow-600', 'text-green-600')

if (forca == 'Fraca'){
    elementoForca.classList.add('text-red-600')
}

if (forca == 'Mediana'){
    elementoForca.classList.add('text-yellow-600')
}


if (forca == 'Forte'){
    elementoForca.classList.add('text-green-600')
}
    

    novo_resultado = caracteres.join('')
    span_senha.innerText = novo_resultado
    botao_copiar.classList.remove('hidden')
    resultado.classList.remove('hidden')

    
})




botao_copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(novo_resultado)
})