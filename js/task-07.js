// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const rangeFontInput = document.querySelector('#font-size-control');
const spanTextSize = document.querySelector('#text');

// min and max for range
rangeFontInput.value = 15;
rangeFontInput.max = 100;
rangeFontInput.min = 10;


const handleGetSizeClick = () => {
   spanTextSize.style.fontSize = `${rangeFontInput.value}px`;
  // console.log(spanTextSize.style.fontSize);
}

rangeFontInput.addEventListener('input', handleGetSizeClick)



