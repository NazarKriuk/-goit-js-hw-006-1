const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // зупиняємо перезавантаження сторінки

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const loginData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(loginData);
    loginForm.reset(); // очищаємо значення полів форми
  }
});



