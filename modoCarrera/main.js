
var translations;
var currentLanguage = 'es';  // Agrega esta línea para inicializar el idioma

// Cargar el archivo JSON utilizando AJAX de jQuery
$.ajax({
  url: 'traducion.json', // Corrige el nombre del archivo JSON
  dataType: 'json',
  success: function(data) {
    translations = data;
    // Inicializar la historia con la introducción
    updateStory('intro');
  },
  error: function(error) {
    console.error('Error fetching translations:', error);
  }
});

// Resto del código JavaScript aquí

// Resto del código JavaScript aquí

// Función para cambiar el idioma
function changeLanguage(language) {
  currentLanguage = language;
  updateStory('intro');
}

// Función para actualizar la historia según la elección del usuario
function choosePath(path) {
  if (path === 'left') {
    updateStory('leftPath', 'happyEnding');
  } else if (path === 'right') {
    updateStory('rightPath', 'sadEnding');
  }
}

// Función para actualizar el contenido de la historia
function updateStory(...keys) {
  var storyElement = document.getElementById('story');
  storyElement.innerHTML = keys.map(key => translations[currentLanguage][key]).join(' ');
}