const changeColorsBtn = document.querySelector('button.change-color');
let body = document.querySelector('body');
let colorNumber = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



changeColorsBtn.addEventListener('click', () =>{
let randomColor = getRandomHexColor();
body.style.backgroundColor = randomColor;
colorNumber.textContent = randomColor;

  
});





