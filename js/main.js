
 
 const DOM = { 
    botonInicio : document.getElementById('iniciar-juego'),
    tablero: document.getElementById('tablero'),
    stats : document.querySelector('.stats'),
    boton1 : document.getElementById('boton1'),
    botones : document.querySelectorAll('juego__boton')
}

const Tablero = {
    botones : {
        1 : document.getElementById('boton1'),
        2 : document.getElementById('boton2'),
        3 : document.getElementById('boton3'),
        4 : document.getElementById('boton4')
    }
}

class Juego  {
    siguienteRonda() {
        this.agregarRonda()
        this.agregarJugada()
    }

    agregarJugada() {
        return this.jugadasSimon.push((Math.floor(Math.random() * 4) + 1))
    }

    agregarRonda() {
        return this.ronda += 1
    }

    reproducirJugadaSimon() {

    }

    escucharJugador() {

        
    }

    validarJugada() {

    }

    compararJugadas() {

    }

    ganar() {

    }

    perder() {
        
    }



}

class Partida extends Juego {
    jugadasSimon = []
    jugadasJugador = []
    score = 0
    ronda = 0

}

DOM.botonInicio.addEventListener('click', () => mostrarTablero())

function mostrarTablero() {
    ocultarBotonInicio()
    traerTablero()

    let partidaActual = new Partida

    iniciarRonda(partidaActual)


}


function iniciarRonda(partida) {
    partida.siguienteRonda()

    partida.reproducirJugadaSimon()

    partida.escucharJugador()

    partida.validarJugada()

    if(partida.compararJugadas === true) {
        iniciarRonda()
    }else {
        partida.perder()
    }
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
