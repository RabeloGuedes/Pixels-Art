// Variables declaration
const paletaDeCores = ['black', 'red', 'blue', 'green'];
const colors = document.querySelectorAll('.color');
// Variables declaration
for (let index = 0; index < paletaDeCores.length; index += 1) {
  colors[index].style.backgroundColor = paletaDeCores[index];
}
