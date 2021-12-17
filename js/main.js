 const DOM = { 
     $botones : document.querySelectorAll('.juego__boton'),
     botonInicio : document.getElementById('iniciar-juego'),
    
     tablero: document.querySelector('.juego'),
     stats : document.querySelector('.stats'),
     boton1 : document.getElementById('boton1'),
     sonido1 : document.getElementById('sonido1'),
    
     boton3 : document.getElementById('boton3')
}




DOM.botonInicio.addEventListener('click', (e) => iniciarJuego)



function iniciarJuego() {
    ocultarBotonInicio
    mostrarTablero()
    console.log('click')
}

function ocultarBotonInicio(){
    DOM.botonInicio.classList.add('oculto')
}
function mostrarTablero() {
    DOM.
}
function ocultarElemento(elemento) {
    elemento.classList.add('oculto')
}

function mostrarElemento(elemento){
    elemento.classList.remove('oculto')

}
function mostrarTablero() {
    $botones.forEach(boton => boton.classList.remove('oculto'))
    $stats.classList.remove('oculto')
}


function reproducirSonido(key) {
    document.getElementById(key).play()
}
