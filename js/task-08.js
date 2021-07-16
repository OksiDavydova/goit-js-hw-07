const numberInput = document.querySelector('input[type="number"]');
const buttonRender = document.querySelector('button[data-action="render"]');
const buttonClear = document.querySelector('button[data-action="destroy"]');
const boxGallery = document.querySelector('div#boxes');

const galleryCollection = [];
let defaultSize= 30;

const handleButtonRenderClick = () => {
  const amount = numberInput.value
  createBox(amount);
}

const createBox = amount => {
  
    for (let i = 0; i < amount; i += 1) {
      let sizeEl = defaultSize + i * 10;

      const div = document.createElement('div');
       div.style.backgroundColor = `#${(() =>
        Math.floor(Math.random() * 16777215).toString(16))()}`;
      div.style.width = `${sizeEl}px`;
      div.style.height = `${sizeEl}px`;

      galleryCollection.push(div);
    }

  boxGallery.append(...galleryCollection);
  // console.log(boxGallery);
};

const handleButtonClearClick = () => {
  galleryCollection.length = 0;;
   boxGallery.innerHTML="";
   numberInput.value = 0;
};

buttonClear.addEventListener('click', handleButtonClearClick);
buttonRender.addEventListener('click', handleButtonRenderClick);


// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

