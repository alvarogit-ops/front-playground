let entrada = document.getElementById('tamanho') // É um elemento HTML
let botao = document.querySelector('button')
let resultado = document.getElementById('div-resultado')


let minusculas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
]

let maiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 
    'X', 'Y', 'Z'];




botao.addEventListener('click', () => {
    let entrada_numero = Number(entrada.value) // É o número lido que preciso converter
    let letras = []
    for (let i = 0; i < entrada_numero; i ++){

        let tipo = Math.floor(Math.random() * 2) // Existem 2 tipos de letras

        if (tipo == 0){
            let aleatoriedade = Math.random() * minusculas.length  // gerar UM número aleatório entre 26 letras
            let arredondamento = Math.floor(aleatoriedade) // arredondar pra baixo
            letras.push(minusculas[arredondamento]) // o método push retorna o tamanho do array, mas não estou guardando isso, estou adicionando as letras
        }   

        else{
            let aleatoriedade = Math.random() * maiusculas.length
            let arredondamento = Math.floor(aleatoriedade) 
            letras.push(maiusculas[arredondamento]) 
        }
       
        
}

 let novo_resultado = letras.join('')
 resultado.innerText = novo_resultado
    //resultado.innerText = entrada.value
})


//navigator.clipboard.writeText('')
