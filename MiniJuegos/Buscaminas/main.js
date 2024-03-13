const filas = 10;
const columnas = 10;
const tablero = [];
let vidas = 5;

function inicializar() {
    vidas = 5; 
    actualizarVidas(); 
    generarBotones();
    for (let i = 0; i < filas; i++) {
        tablero.push([]);
        for (let j = 0; j < columnas; j++) {
            tablero[i].push({ tieneMina: false, destapado: false });
        }
    }

    let minas = 10;

    while (minas > 0) {
        let fila = Math.floor(Math.random() * filas);
        let columna = Math.floor(Math.random() * columnas);

        if (!tablero[fila][columna].tieneMina) {
            tablero[fila][columna].tieneMina = true;
            minas--;
        }
    }
}

function generarBotones() {
    let html = "";
    for (let i = 0; i < filas; i++) {
        html += '<div>';
        for (let j = 0; j < columnas; j++) {
            html += '<button type="button" onclick="destapa(event.target, ' + i + ',' + j + ')"></button>';
        }
        html += '</div>';
    }
    document.querySelector('#matriz').innerHTML = html;
}

function destapa(button, fila, columna) {
    if (tablero[fila][columna].tieneMina) {
        vidas--;
        actualizarVidas(); 
        button.style.backgroundColor = 'red';
        button.disabled = true;
        alert('¡Había una mina ahí! *explota* \n -1 vida');

        if (vidas === 0) {
            alert('¡Has perdido! Se acabaron las vidas.');
            reset();
        }
    } else if (minaCercana(fila, columna)) {
        button.style.backgroundColor = 'yellow';
        button.disabled = true;
    } else {
        button.style.backgroundColor = '#1c7cb4';
        button.disabled = true;
        tablero[fila][columna].destapado = true;
    }
}

function minaCercana(fila, columna) {
    for (let i = fila - 1; i <= fila + 1; i++) {
        for (let j = columna - 1; j <= columna + 1; j++) {
            if (i >= 0 && j >= 0 && i < filas && j < columnas && (i !== fila || j !== columna)) {
                if (tablero[i][j].tieneMina) {
                    return true;
                }
            }
        }
    }
    return false;
}

function actualizarVidas() {
    document.getElementById('vidas').innerText =  vidas;
    if (vidas === 0) {
        setTimeout(function() {
            alert('¡Has perdido! Se acabaron las vidas.');
            reset();
        }, 500); 
    }
}

function reset() {
    tablero.length = 0; 
    document.querySelector('#matriz').innerHTML = ''; 
    inicializar();
}

function mostrarMenuu() {
    var menuInfo = document.getElementById('menuInfo');
    menuInfo.style.display = 'block';
    
    var botonInfo = document.getElementById('botonInfo');
    botonInfo.style.display = 'none';
}

function cerrarMenuu() {
    var menuInfo = document.getElementById('menuInfo');
    menuInfo.style.display = 'none';

    var botonInfo = document.getElementById('botonInfo');
    botonInfo.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  // traducciones
  document.getElementById('selector-idiomaM').addEventListener('change', function(){
      var idiomaSeleccionado = this.value;

      document.getElementById('txVidas').innerHTML = traduccionesM[idiomaSeleccionado].txVidas;
      document.getElementById('reiniciar').innerHTML = traduccionesM[idiomaSeleccionado].reiniciar;
      document.getElementById('botonInfo').innerHTML = traduccionesM[idiomaSeleccionado].botonInfo;
      document.getElementById('txtInfo').innerHTML = traduccionesM[idiomaSeleccionado].txtInfo;
      document.getElementById('cerrarMenu').innerHTML = traduccionesM[idiomaSeleccionado].cerrarMenu;
      document.getElementById('volver').innerHTML = traduccionesM[idiomaSeleccionado].volver;
  });
});