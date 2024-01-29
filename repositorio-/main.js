
const filas = 10;
const columnas = 10;

const matrizBack = [];

const matriz = document.getElementById("matrizBack");

for (let i = 0; i < filas; i++) {
  matrizBack[i] = [];
  for (let j = 0; j < columnas; j++) {
    matrizBack[i][j] = 0;
    matrizBack[i][j] = Math.round(Math.random());
  }

}

console.log(matrizBack);


