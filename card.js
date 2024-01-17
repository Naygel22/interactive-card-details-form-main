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
const detailsContainer = document.querySelector('.detailsContainer');
//const completeScreen = document.querySelector('.completeScreen');

 blankTexts.forEach(blankText => {
  blankText.classList.add('hidden');
})
 
 //completeScreen.classList.add('hidden');
 
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
  // Początkowo ukryj wszystkie komunikaty
  blankTexts.forEach(blankText => {
    blankText.classList.add('hidden');
  });

	inputBars.forEach(inputBar => {
  	inputBar.classList.remove('InputBarRedBorder');
  })


  // Sprawdź poszczególne pola i wyświetl komunikaty zgodnie z warunkami
  if (inputCardholdername.value === '') {
    document.querySelector('.cardholdername-item1 .blankText').classList.remove('hidden');
    document.querySelector('.cardholdername-item1 .inputBar').classList.add('InputBarRedBorder');
  }

  if (cardNumberInput.value === '') {
    document.querySelector('.cardnumber-item2 .blankText').classList.remove('hidden');
    document.querySelector('.cardnumber-item2 .inputBar').classList.add('InputBarRedBorder');
  }

  const isMMEmpty = MM.value === '';
  const isYYEmpty = YY.value === '';

  if (isMMEmpty && isYYEmpty) {
    document.querySelector('.exp-date-item3 .blankText').classList.remove('hidden');
    document.querySelector('.exp-date-item3 .inputBar').classList.add('InputBarRedBorder');
  } else if (isMMEmpty || isYYEmpty) {
    document.querySelector('.exp-date-item3 .blankText').classList.remove('hidden');
    document.querySelector('.exp-date-item3 .inputBar').classList.add('InputBarRedBorder');
  }

  if (cvcInputBar.value === '') {
    document.querySelector('.cvc-item4 .blankText').classList.remove('hidden');
    document.querySelector('.cvc-item4 .inputBar').classList.add('InputBarRedBorder');
  } 
  if (
  inputCardholdername.value !== '' &&
  cardNumberInput.value !== '' &&
  MM.value !== '' &&
  YY.value !== '' &&
  cvcInputBar.value !== ''
  ) {
  detailsContainer.classList.add('hidden');
  //completeScreen.classList.remove('hidden');
  iconComplete.classList.remove('hidden');
thankyouText.classList.remove('hidden');
completeScreenDescription.classList.remove('hidden');
continueButton.classList.remove('hidden');
  }
}

//hiding element for complete screen
const iconComplete = document.querySelector('.iconComplete');
const thankyouText = document.querySelector('.thankyouText');
const completeScreenDescription = document.querySelector('.completeScreenDescription');
const continueButton = document.querySelector('.continueButton');

iconComplete.classList.add('hidden');
thankyouText.classList.add('hidden');
completeScreenDescription.classList.add('hidden');
continueButton.classList.add('hidden');


confirmButton.addEventListener('click', () => {
  showBlankTexts();
});


