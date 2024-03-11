window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const valorResultado = document.getElementById('chute');
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', () => recognition.start())

function onSpeak(e) {
    let resultado = e.results[0][0].transcript;
    exibirChuteNaTela(resultado)
    verificarValidacaoDoChute(resultado);
}

function exibirChuteNaTela(resultado) {
    valorResultado.innerHTML = `
    <h2>Voce disse: </h2>
    <span class="box" id="valor-resultado">${resultado}</span>
    `
}


function verificarValidacaoDoChute(resultado) {
    const numero = parseInt(resultado)

    if(Number.isNaN(numero)) {
        valorResultado.innerHTML += `<div>Diga um valor valido!</div>`
        return
    }

    if(numero > valorMaior || numero < valorMenor) {
        valorResultado.innerHTML += `<div>O valor precisa estar entre ${valorMenor} e ${valorMaior}</div>`
        return
    }

    if(numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h1>Parabens voce Acertou!!</h1>
        <h3>O numero secreto era ${numeroAleatorio}.</h3>
        <button id="jogar-novamente" class="btnJogar">Jogar Novamente</button>`
    } 
    else if (numero < numeroAleatorio){
        valorResultado.innerHTML += `<h2>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></h2>`

    } else {
        valorResultado.innerHTML += `<h2>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></h2>`
        
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})