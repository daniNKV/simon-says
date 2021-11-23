
const $botones = document.querySelectorAll('.juego__boton')
const $btnInicio = document.querySelector('.inicio .centro')
const $elementoInicio = document.querySelector('.inicio')
const $juego = document.querySelector('.juego')
const $stats = document.querySelector('.stats')
const boton1 = document.getElementById('boton1')
const sonido1 = document.getElementById('sonido1')

const boton3 = document.getElementById('boton3')

const SONIDOS = {
    play1: sonido1.play(),
}

$btnInicio.addEventListener('click', () => iniciarJuego())



function iniciarJuego() {
    ocultarBotonInicio()
    mostrarElementos()
}

function ocultarBotonInicio() {
    $elementoInicio.classList.add('oculto')
}
function mostrarElementos() {
    $botones.forEach(boton => boton.classList.remove('oculto'))
    $stats.classList.remove('oculto')
}


function reproducirSonido(key) {
    document.getElementById(key).play()
}
