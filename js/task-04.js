let counterValue = 0;
const valueEl = document.querySelector('#value');

document.querySelector('[data-action="decrement"]')
.addEventListener('click', () => {
  counterValue--;
  valueEl.textContent = counterValue;
});

document.querySelector('[data-action="increment"]').addEventListener('click', () => {
  counterValue++;
  valueEl.textContent = counterValue;
});
