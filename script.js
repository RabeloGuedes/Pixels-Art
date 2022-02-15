// Variables declaration
const paletaDeCores = ['black', 'red', 'blue', 'green'];
const colors = document.querySelectorAll('.color');
const pixelLinesColumns = 5;
const pixelBoard = document.querySelector('#pixel-board');
let selected = document.querySelector('.color');
let selectedColor = getComputedStyle(selected).backgroundColor;
// Variables declaration
for (let index = 0; index < paletaDeCores.length; index += 1) {
  colors[index].style.backgroundColor = paletaDeCores[index];
}

function pixels() {
  for (let index = 0; index < pixelLinesColumns; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    pixelBoard.appendChild(pixelLine);
    for (let index2 = 0; index2 < pixelLinesColumns; index2 += 1) {
      const singlePixel = document.createElement('div');
      singlePixel.className = 'pixel';
      pixelLine.appendChild(singlePixel);
    }
  }
}
pixels();

selected.className = 'color selected';
