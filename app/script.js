const valorMenor = 1;
const valorMaior = 100;
const numeroAleatorio = gerarNumeroAleatorio(valorMaior, valorMenor);

const elementoValorMenor = document.getElementById('valor-menor').innerHTML = valorMenor;
const elementoValorMaior = document.getElementById('valor-maior').innerHTML = valorMaior;

function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(numeroAleatorio)
console.log(valorMenor)
console.log(valorMaior)
