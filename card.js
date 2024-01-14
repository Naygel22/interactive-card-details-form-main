const cardholdernameText = document.querySelector('.cardholdernameText');
const inputCardholdername = document.querySelector('#inputCardholdername');



inputCardholdername.addEventListener('input', () => {
  cardholdernameText.textContent = inputCardholdername.value;
})
