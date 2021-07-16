// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>



const inputText = document.querySelector('input#name-input');
const textForSpan = document.querySelector('span#name-output');


const onUpdateValue = event => {
  textForSpan.textContent = event.target.value 
  ? event.target.value
  : 'незнакомец';
};

inputText.addEventListener('input',onUpdateValue);
