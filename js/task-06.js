const textInput = document.querySelector("#validation-input");
const validationInput = document.querySelector('#validation-input');


textInput.addEventListener("blur", () => {
    
    const inputValue = textInput.value;
    

    if (inputValue.length === 6) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
      } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
      }
    });