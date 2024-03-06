
document.getElementById('selector-idioma').addEventListener('change', function(){
  var idiomaSeleccionado = this.value;


  document.getElementById('titulo').innerHTML= traducciones[idiomaSeleccionado].titulo;
  document.getElementById('descripcion').innerHTML= traducciones[idiomaSeleccionado].descripcion;

  
})