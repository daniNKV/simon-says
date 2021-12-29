
 const DOM = { 
    botonInicio : document.getElementById('iniciar-juego'),
    tablero: document.getElementById('tablero'),
    stats : document.querySelector('.stats'),
    boton1 : document.getElementById('boton1'),
    botones : document.querySelectorAll('juego__boton')
}

class Partida {
    jugadas = { 
        simon: [],
        humano: []
    }
    score = 0
    maxScore = 0
    ronda = 0   
}

const siguienteRonda = (objeto) => {
    let nuevaRonda = Object.assign({}, objeto)
    let {jugadas, ronda} = nuevaRonda

    jugadas.simon = agregarJugada(obtenerSecuenciaSimon(jugadas))
    nuevaRonda.ronda = aumentarRonda(ronda)

    return Object.freeze(nuevaRonda)

}

const obtenerSecuenciaSimon = (objetoJugadas) => {
    const secuencia = objetoJugadas.simon
    return secuencia
}
const aumentarRonda = (number) => {
    const sumarRonda = number + 1
    return sumarRonda
}

const agregarJugada = (array) => {
    return array.concat(crearJugadaRandom(4))
}

const crearJugadaRandom = (cantidadBotones) => {
    return Math.floor((Math.random()) * cantidadBotones) + 1
}
const obtenerRonda = (array) => {
    return array.length
}


DOM.botonInicio.addEventListener('click', () => iniciarPartida())

function iniciarPartida() {
    prepararTablero()    
    
    const partidaActual = new Partida

    iniciarRonda(partidaActual)

    return partidaActual

}

function iniciarRonda(objeto) {
    const nuevaRonda = siguienteRonda(objeto)

    console.log(nuevaRonda)


}


function prepararTablero() {
    ocultarBotonInicio()
    traerTablero()
}

function ocultarBotonInicio(){
    DOM.botonInicio.classList.add('oculto')
}
function traerTablero() {
    DOM.tablero.classList.remove('oculto')
}
function ocultarElemento(elemento) {
    elemento.classList.add('oculto')
}

function mostrarElemento(elemento){
    elemento.classList.remove('oculto')

}



function reproducirSonido(key) {
    document.getElementById(key).play()
}
