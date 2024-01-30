const filas = 10;
const columnas = 10;
const tablero = [];

function inicializar() {
  generarBotones();
  for (var i = 0; i < filas; i++) {
    tablero.push([]);
    for (var j = 0; j < columnas; j++) {
      tablero[i].push({ tieneMina: false, destapado: false });
    }
  }

  let minas = 10;

  while (minas > 0) {
    const fila = Math.floor(Math.random() * filas);
    const columna = Math.floor(Math.random() * columnas);

    if (!tablero[fila][columna].tieneMina) {
      tablero[fila][columna].tieneMina = true;
      minas--;
    }
  }
}

function generarBotones() {
  var html = "";
  for (var i = 0; i < filas; i++) {
    html += '<div>';
    for (var j = 0; j < columnas; j++) {
      html += '<button type="button" onclick="destapa(event.target, ' + i + ',' + j + ')"></button>';
    }
    html += '</div>';
  }
  document.querySelector('#matriz').innerHTML = html;
}

function destapa(button, fila, columna) {
  if (tablero[fila][columna].tieneMina) {
    button.style.backgroundColor = 'red';
    button.disabled = true;
    alert('¡Has perdido!');
  } else if (minaCercana(fila, columna)){
    button.style.backgroundColor = 'yellow';
    button.disabled = true;
  }else{
    button.style.backgroundColor = 'white';
    button.disabled = true;
    tablero[fila][columna].destapado = true;
  }
}

function minaCercana (fila, columna){
  for(i = fila-1;i<fila +1;i++){
    for(j = columna-1;j<columna +1;j++){
        if(i>=0 && j >=0 && i < filas && j < columnas && (i!= fila || j!= columna)){
        if(tablero[i][j].tieneMina){
        return true
        }
    }
  } 
  }
  return false;
}
