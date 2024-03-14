document.addEventListener('DOMContentLoaded', function() {
    // traducciones
    document.getElementById('selector-idiomaS').addEventListener('change', function(){
        var idiomaSeleccionado = this.value;
  
        document.getElementById('bienvenido').innerHTML = traduccionesP[idiomaSeleccionado].bienvenido;
        document.getElementById('elige').textContent = traduccionesP[idiomaSeleccionado].elige;
        document.getElementById('ppt').innerHTML = traduccionesP[idiomaSeleccionado].ppt;
        document.getElementById('modoc').textContent = traduccionesP[idiomaSeleccionado].modoc;
        document.getElementById('simon').innerHTML = traduccionesP[idiomaSeleccionado].simon;
        document.getElementById('buscaminas').textContent = traduccionesP[idiomaSeleccionado].buscaminas;
    });
  });