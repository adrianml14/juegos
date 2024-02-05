const filas = 2;
const columnas = 2;
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


function actualizarVidas() {
  document.getElementById('vidas').innerText = 'Vidas: ' + vidas;
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

inicializar();


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