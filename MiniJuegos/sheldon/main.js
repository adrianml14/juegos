var piedra = 1;
var papel = 2;
var tijera = 3;
var lagarto = 4;
var spock = 5;
var randomNumber;
var seleccionUsuario;
var Victoria = 0;
var Derrota = 0;
var rondaActual = 0;
var rondasTotales = 0;
var resultado= " "
var pausa = false;  
var reset = document.getElementById('reset');

function juegoResultado(){
    
    if (seleccionUsuario==randomNumber){
        resultado= "Empate";
    }
    else if (seleccionUsuario == 1 && randomNumber == 2){
        resultado= "Derrota";
    }
    else if (seleccionUsuario==1 && randomNumber == 3){
        resultado="Victoria";
    }
    else if (seleccionUsuario==1 && randomNumber == 4){
        resultado="Victoria";
    }
    else if (seleccionUsuario==1 && randomNumber == 5){
        resultado="Derrota";
    }

    //------------------------//
    if (seleccionUsuario == 2 && randomNumber == 1){
        resultado="Victoria";
    }
    else if (seleccionUsuario == 2 && randomNumber == 3){
        resultado="Derrota";
    }
    else if (seleccionUsuario == 2 && randomNumber == 4){
        resultado="Derrota";
    }
    else if (seleccionUsuario == 2 && randomNumber == 5){
        resultado="Victoria";
    }
    //------------------------//
    if (seleccionUsuario == 3 && randomNumber == 1){
        resultado="Derrota";
    }
    else if (seleccionUsuario == 3 && randomNumber == 2){
        resultado="Victoria";
    }
    else if (seleccionUsuario == 3 && randomNumber == 4){
        resultado="Victoria";
    }
    else if (seleccionUsuario == 3 && randomNumber == 5){
        resultado="Derrota";
    }
    //------------------------//
    if (seleccionUsuario == 4 && randomNumber == 1){
        resultado="Derrota";
    }
    else if (seleccionUsuario == 4 && randomNumber == 2){
        resultado="Victoria";
    }
    else if (seleccionUsuario == 4 && randomNumber == 3){
        resultado="Derrota";
    }
    else if (seleccionUsuario == 4 && randomNumber == 5){
        resultado="Victoria";
    }
    //------------------------//
    if (seleccionUsuario == 5 && randomNumber == 1){
        resultado="Victoria";
    }
    else if (seleccionUsuario == 5 && randomNumber == 2){
        resultado="Derrota";
    }
    else if (seleccionUsuario == 5 && randomNumber == 3){
        resultado="Victoria";
    }
    else if (seleccionUsuario == 5 && randomNumber == 4){
        resultado="Derrota";
    }
    document.getElementById("resultado").innerHTML = resultado;
    puntaje(resultado);

    var resultadoColor = document.getElementById("resultado");
    switch (resultado) {
        case "Victoria":
            resultadoColor.style.backgroundColor = "green";
            break;
        case "Empate":
            resultadoColor.style.backgroundColor = "orange";
            break;
        case "Derrota":
            resultadoColor.style.backgroundColor = "red";
            break;
        default:
            resultadoColor.style.backgroundColor = ""; 
            break;}
}

function seleccion(a){
    switch(a){
        case 1: seleccionUsuario = 1; break;
        case 2: seleccionUsuario = 2; break;
        case 3: seleccionUsuario = 3; break;
        case 4: seleccionUsuario = 4; break;
        case 5: seleccionUsuario = 5; break;
    }
}

function generarNumero() {
    if (!pausa) {
        rondasTotales = document.getElementById("cantidadRondas").value;
        if (rondaActual < rondasTotales) {
            randomNumber = Math.floor(Math.random() * 5);
            console.log(randomNumber);
            juegoResultado();
            rondaActual++;
            document.getElementById('rondas').textContent = "Ronda actual: " + rondaActual;
        } else {
            mostrarResultado(Victoria, Derrota);
            pausar();  
        }
    }
}


var contador = 0;
var contadorIA = 0;
function puntaje(resultado){
    if (resultado == "Victoria") {
        Victoria++;
        document.getElementById('contador').textContent = "Victorias Jugador: " + Victoria;
    } else if (resultado == "Derrota") {
        Derrota++;
        document.getElementById('contadorIA').textContent = "Victorias IA: " + Derrota;
    }
}

function elegirRondas(numeroRondas) {
    rondasTotales = numeroRondas;
    resetContadores();
    rondaActual = 0;  
    document.getElementById('rondas').textContent = "Ronda actual: 0";  
}

function resetContadores() {
    Victoria =0;
    Derrota =0;
    rondaActual =0;

    document.getElementById('contador').textContent = "Victorias Jugador: 0";
    document.getElementById('contadorIA').textContent = "Victorias IA: 0";
    document.getElementById('rondas').textContent = "Ronda actual: 0";
    
}

//menu informacion//
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
//mensaje//
function mostrarResultado(Victoria, Derrota) {
    var resultadoFinal = "¡Juego terminado! Resultado final:\nJugador: " + Victoria + " - IA: " + Derrota;
    document.getElementById("mensaje").textContent = resultadoFinal;
    resetContadores();
}

function pausar() {
    pausa = true;
    document.getElementById('reset').disabled = false;  
}

function resetPartida() {
    document.getElementById('mensaje').innerHTML = " ";
    document.getElementById('resultado').innerHTML = " ";
        
    resetContadores();
     
    document.getElementById('reset').disabled = false;

    pausa = false;
}


var colores = ["#f7d321", "orange","red","white"]; 
var indiceColor = 0;

function cambiarColorAutomaticamente() {
  var elemento = document.getElementById("mensaje");
  elemento.style.color = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
}
setInterval(cambiarColorAutomaticamente, 1000);

document.addEventListener('DOMContentLoaded', function() {
    // traducciones
    document.getElementById('selector-idiomaS').addEventListener('change', function(){
        var idiomaSeleccionado = this.value;
  
        document.getElementById('titulo').innerHTML = traduccionesS[idiomaSeleccionado].titulo;
        document.getElementById('piedra').textContent = traduccionesS[idiomaSeleccionado].Piedra;
        document.getElementById('papel').textContent = traduccionesS[idiomaSeleccionado].Papel;
        document.getElementById('tijera').textContent = traduccionesS[idiomaSeleccionado].Tijera;
        document.getElementById('lagarto').textContent = traduccionesS[idiomaSeleccionado].Lagarto;
        document.getElementById('spock').textContent = traduccionesS[idiomaSeleccionado].Spock;
        document.getElementById('CantidadRondas').innerHTML = traduccionesS[idiomaSeleccionado].CantidadRondas;
        document.getElementById('jugar').innerHTML = traduccionesS[idiomaSeleccionado].jugar;
        document.getElementById('contador').innerHTML = traduccionesS[idiomaSeleccionado].contador;
        document.getElementById('contadorIA').innerHTML = traduccionesS[idiomaSeleccionado].contadorIA;
        document.getElementById('rondas').innerHTML = traduccionesS[idiomaSeleccionado].rondas;
        document.getElementById('botonInfo').innerHTML = traduccionesS[idiomaSeleccionado].botonInfo;
        document.getElementById('infomenu').innerHTML = traduccionesS[idiomaSeleccionado].infomenu;
        document.getElementById('BcerrarMenu').innerHTML = traduccionesS[idiomaSeleccionado].BcerrarMenu;
        document.getElementById('resett').innerHTML = traduccionesS[idiomaSeleccionado].resett;
        document.getElementById('volver').innerHTML = traduccionesS[idiomaSeleccionado].volver;
    });
  });
