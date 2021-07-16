/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.*/

const input = document.querySelector('#validation-input');

const handleInputBlue = event => {
const  evtCurTar = event.currentTarget;

  if (evtCurTar.value.length >= 
    Number(evtCurTar.dataset.length)) {

      evtCurTar.classList.remove('invalid');
      evtCurTar.classList.add('valid');
    }else {

      evtCurTar.classList.remove('valid');
      evtCurTar.classList.add('invalid');
         }
         console.dir(evtCurTar);
};

input.addEventListener('change', handleInputBlue);

