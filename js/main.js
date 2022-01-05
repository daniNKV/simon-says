
 const DOM = { 
    botonInicio : document.getElementById('iniciar-juego'),
    tablero: document.getElementById('tablero'),
    stats : document.querySelector('.stats'),
    boton1 : document.getElementById('boton1'),
    botones : document.querySelectorAll('.juego__boton')
}

const Tablero = {
    botones : {
        1 : document.getElementById('boton1'),
        2 : document.getElementById('boton2'),
        3 : document.getElementById('boton3'),
        4 : document.getElementById('boton4')
    },

    mensaje : document.getElementById('mensaje') 
}


class Partida {
    jugadas = { 
        simon: [2,3,4,2,3],
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

    return nuevaRonda

}
const juegaSimon = (secuenciaAReproducir) => {
    anunciarTurno('Simon');
    
    return reproducirSecuencia(secuenciaAReproducir)

}

const reproducirSecuencia = async (secuencia) => {
    const {...boton} = Tablero.botones

    for( movimiento of secuencia ) {
        await esperar(1000)
        activarBoton(boton[movimiento])
    }

    return true
}

const esperar = (tiempo) => {
    return new Promise((resolucion) => setTimeout(resolucion, tiempo))
  }


const escucharJugador = (array) => {
    habilitarInput()
}


const obtenerSecuenciaSimon = (objetoJugadas) => {
    return objetoJugadas.simon
    
}
const aumentarRonda = (number) => {
    return number++
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

    const nuevaPartida = new Partida

    const partida = iniciarRonda(nuevaPartida)

    return partida
}

function iniciarRonda(objetoRonda) {
    const nuevaRonda = siguienteRonda(objetoRonda)
    let {jugadas, score, maxScore, ronda} = nuevaRonda
    
    const rondaSimon = obtenerSecuenciaSimon(jugadas)

    const rondaHumano = juegaHumano(juegaSimon(rondaSimon), rondaSimon)
}

const juegaHumano = async (funcionAEsperar, objetoAComparar) => {
    const simonTermino = await funcionAEsperar

    
}   

// SIDE EFFECTS
function anunciarTurno(jugador) {
    const lugarMensaje = Tablero.mensaje

    lugarMensaje.innerText = `Juega ${jugador}... `
}

function habilitarInput() {
    DOM.botones.forEach(
        boton => boton.addEventListener('click', e => activarBoton(e.target)))
}

function activarBoton(elemento) {
    elemento.classList.add('activo')
    setTimeout(() => elemento.classList.remove('activo'), 250)
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

function reproducirSonido(key) {
    document.getElementById(key).play()
}
