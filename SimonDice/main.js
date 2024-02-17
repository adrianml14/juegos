const colores = ['rojo', 'verde', 'azul', 'amarillo'];
let secuencia = [];
let secuenciaUsuario = [];
let nivel = 0;

function  iniciar() {
    secuencia = [];
    secuenciaUsuario = [];
    nivel = 0;
    mostrarMensaje('Sigue la secuencia...');
    siguienteNivel();
}

function siguienteNivel() {
    secuenciaUsuario = [];
    nivel++;
    mostrarMensaje(`Nivel ${nivel}`);
    agregarASecuencia();
    reproducirSecuencia();
}

function agregarASecuencia() {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    secuencia.push(colorAleatorio);
}

function reproducirSecuencia() {
    let i = 0;
    const intervaloId = setInterval(() => {
        resaltarCasilla(secuencia[i]);
        i++;
        if (i >= secuencia.length) {
            clearInterval(intervaloId);
            usuario();
        }
    }, 800 );
}

function resaltarCasilla(color) {
    const casilla = document.getElementById(color);
    casilla.style.opacity = '1';
    setTimeout(() => {
        casilla.style.opacity = '0.5';
    }, 250);
}

function usuario() {
    mostrarMensaje('Tu turno...');
    const casillas = document.querySelectorAll('.casilla');
    casillas.forEach(casilla => {
        casilla.addEventListener('click', clickBoton);
    });
}

function deshabilitarUsuario() {
    const casillas = document.querySelectorAll('.casilla');
    casillas.forEach(casilla => {
        casilla.removeEventListener('click', clickBoton);
    });
}

function clickBoton(evento) {
    const colorSeleccionado = evento.target.id;
    resaltarCasilla(colorSeleccionado);
    secuenciaUsuario.push(colorSeleccionado);

    if (!verificarUsuario()) {
        finJuego();
    } else if (secuenciaUsuario.length === secuencia.length) {
        deshabilitarUsuario();
        setTimeout(siguienteNivel, 1000);
    }
}

function verificarUsuario() {
    for (let i = 0; i < secuenciaUsuario.length; i++) {
        if (secuenciaUsuario[i] !== secuencia[i]) {
            return false;
        }
    }
    return true;
}

function finJuego() {
    mostrarMensaje(`¡Incorrecto! Has llegado hasta el nivel ${nivel}`);
    deshabilitarUsuario();
    alert(`¡Perdiste! Has llegado hasta el nivel ${nivel}`);
    setTimeout(() => {
        reiniciarJuego();
    }, 500);
}

function reiniciarJuego() {
    iniciar();
}

function mostrarMensaje(mensaje) {
    const elementoMensaje = document.getElementById('mensaje');
    elementoMensaje.textContent = mensaje;
}

document.addEventListener('DOMContentLoaded', () => {
    const tableroJuego = document.getElementById('tablero-juego');
    colores.forEach(color => {
        const casilla = document.createElement('div');
        casilla.id = color;
        casilla.className = 'casilla';
        casilla.style.backgroundColor = color;
        tableroJuego.appendChild(casilla);
    });
});