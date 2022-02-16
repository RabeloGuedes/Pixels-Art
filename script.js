// Variables declaration
const colorPalette = document.querySelector('#color-palette');
const paletaDeCores = ['black', 'red', 'blue', 'green'];
const colors = document.querySelectorAll('.color');
const pixelLinesColumns = 5;
let pixelBoard = document.querySelector('#pixel-board');
const buttonContainer = document.querySelector('#button-container');
const addButton = document.createElement('button');
const pixelInput = document.createElement('input');
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
       const pixel = document.createElement('div');
      pixel.className = 'pixel';
       pixelLine.appendChild(pixel);
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
    if(event.target.className == 'pixel') {
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

pixelInput.id = 'board-size';
pixelInput.setAttribute('type', 'number');
pixelInput.setAttribute('min', '1');
pixelInput.setAttribute('max', '50');
addButton.id = 'generate-board';
addButton.innerText = 'VQV';
buttonContainer.append(pixelInput);
buttonContainer.append(addButton);

addButton.addEventListener('click', function (){
  if (pixelInput.value === '') {
    alert('Board inválido!')
  } else {
      pixelBoard.remove();
      pixelBoard = document.createElement('section');
      pixelBoard.id = 'pixel-board';
      document.body.appendChild(pixelBoard);
      if (pixelInput.value < 5) {
        pixelInput.value = 5;
      }
      else if (pixelInput.value > 50) {
        pixelInput.value = 50;
      } for(let index = 0; index < pixelInput.value; index += 1) {
        const pixelLine = document.createElement('div');
        pixelLine.className = 'pixel-line';
        pixelBoard.appendChild(pixelLine);
        for (let index2 = 0; index2 < pixelInput.value; index2 += 1) {
          const pixel = document.createElement('div');
          pixel.className = 'pixel'
          pixelLine.appendChild(pixel);
        }
      }
    }
    pixelBoard.addEventListener('click', function (event) {
      if(event.target.className == 'pixel') {
        event.target.style.backgroundColor = selectedColor; 
    }
    })
})


