// Variables declaration
const colorPalette = document.querySelector('#color-palette');
const paletaDeCores = ['black', 'red', 'blue', 'green'];
const colors = document.querySelectorAll('.color');
const pixelLinesColumns = 5;
const pixelBoard = document.querySelector('#pixel-board');
const buttonContainer = document.querySelector('#button-container');
let selected = document.querySelector('.color');
let selectedColor = 'rgb(0,0,0)';
let clearButton = document.createElement('button');
// Variables declaration
selected.className = 'color selected';

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

colorPalette.addEventListener('click', function (event) {
  if (event.target != colorPalette) {
    for (let index of colors) {
      index.className = 'color';
    }
    selected = event.target;
    selected.className = 'color selected';
    selectedColor = getComputedStyle(selected).backgroundColor;

  }
})

pixelBoard.addEventListener('click', function (event) {
    if(event.target != pixelBoard) {
      event.target.style.backgroundColor = selectedColor; 
  }
})

clearButton.id ='clear-board';
clearButton.innerText = 'Limpar';
buttonContainer.append(clearButton);

clearButton.addEventListener('click',function () {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
})