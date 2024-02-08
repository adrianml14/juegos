const colores = ['rojo', 'verde', 'azul', 'amarillo'];
let secuencia = [];
let secuenciaUsuario = [];
let nivel = 0;

function  iniciarJuego() {
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
            habilitarEntradaUsuario();
        }
    }, 1000);
}

function resaltarCasilla(color) {
    const casilla = document.getElementById(color);
    casilla.style.opacity = '1';
    setTimeout(() => {
        casilla.style.opacity = '0.5';
    }, 500);
}

function habilitarEntradaUsuario() {
    mostrarMensaje('Tu turno...');
    const casillas = document.querySelectorAll('.casilla');
    casillas.forEach(casilla => {
        casilla.addEventListener('click', manejarClickCasilla);
    });
}

function deshabilitarEntradaUsuario() {
    const casillas = document.querySelectorAll('.casilla');
    casillas.forEach(casilla => {
        casilla.removeEventListener('click', manejarClickCasilla);
    });
}

function manejarClickCasilla(evento) {
    const colorSeleccionado = evento.target.id;
    resaltarCasilla(colorSeleccionado);
    secuenciaUsuario.push(colorSeleccionado);

    if (!verificarEntradaUsuario()) {
        finJuego();
    } else if (secuenciaUsuario.length === secuencia.length) {
        deshabilitarEntradaUsuario();
        setTimeout(siguienteNivel, 1000);
    }
}

function verificarEntradaUsuario() {
    for (let i = 0; i < secuenciaUsuario.length; i++) {
        if (secuenciaUsuario[i] !== secuencia[i]) {
            return false;
        }
    }
    return true;
}

function finJuego() {
    mostrarMensaje('¡Incorrecto! Fin del juego.');
    deshabilitarEntradaUsuario();
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