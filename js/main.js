 const DOM = { 
    botonInicio : document.getElementById('iniciar-juego'),
    tablero: document.getElementById('tablero'),
    stats : document.querySelector('.stats'),
    boton1 : document.getElementById('boton1')
}
const boton1 = document.getElementById('boton1')


const Tablero = {
    botones : {
        1 : document.getElementById('boton1'),
        2 : document.getElementById('boton2'),
        3 : document.getElementById('boton3'),
        4 : document.getElementById('boton4')
    }
}



class Partida  {
    jugadasSimon = []
    jugadasJugador = []
    score = 0
    ronda = 0

    static agregarJugada() {

    }

    static validarJugada() {

    }

}


DOM.botonInicio.addEventListener('click', (e) => iniciarJuego())
boton1.addEventListener('click', (e) => console.log('click'), true)

function iniciarJuego() {
    ocultarBotonInicio()
    mostrarTablero()

    iniciarRonda();

}


function iniciarRonda() {
    let partidaActual = new Partida;
    console.log(partidaActual);
}




function ocultarBotonInicio(){
    DOM.botonInicio.classList.add('oculto')
}
function mostrarTablero() {
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
