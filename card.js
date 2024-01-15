const cardholdernameText = document.querySelector('.cardholdernameText');
const inputCardholdername = document.querySelector('#inputCardholdername');

const dateTextMonth = document.querySelector('.dateTextMonth');
const MM = document.querySelector('#MM');

const dateTextYear = document.querySelector('.dateTextYear');
const YY = document.querySelector('#YY');

const cvcText = document.querySelector('.cvcText');
const cvcInputBar = document.querySelector('#cvcInputBar');

const cardNumberText = document.querySelector('.cardNumberText');
const cardNumberInput = document.querySelector('#cardNumberInput');

const blankTexts = document.querySelectorAll('.blankText');
const confirmButton = document.querySelector('.confirmButton');
const inputBars = document.querySelectorAll('.inputBar');
const hidden = document.querySelector('.hidden');

blankTexts.forEach(blankText => {
  blankText.classList.add('hidden');
})



inputCardholdername.addEventListener('input', () => {
  cardholdernameText.textContent = inputCardholdername.value;
});

cvcInputBar.addEventListener('input', () => {
	cvcText.textContent = cvcInputBar.value;
});

MM.addEventListener('input', () => {
	dateTextMonth.textContent = MM.value;
});

YY.addEventListener('input', () => {
	dateTextYear.textContent = YY.value;
});

cardNumberInput.addEventListener('input', () => {
  let cardNumber = cardNumberInput.value.replace(/\D/g, ''); // Usuwamy wszystkie znaki niebędące cyframi
  cardNumber = cardNumber.replace(/(.{4})/g, '$1 '); // Dodajemy spację po każdych 4 cyfrach

  cardNumberInput.value = cardNumber.trim(); // Aktualizujemy wartość pola wejściowego
  cardNumberText.textContent = cardNumberInput.value;
});

function showBlankTexts() {
  inputBars.forEach((inputBar, index) => {
    const isInputEmpty = inputBar.value === '';
    const blankText = blankTexts[index];

    if (isInputEmpty) {
      blankText.classList.remove('hidden');
    } else {
      blankText.classList.add('hidden');
    }
  });
}

confirmButton.addEventListener('click', () => {
  showBlankTexts();
});





