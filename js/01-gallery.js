import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

//Создание элемента div-контейнера, в который будем добавлять карточки картинкок
const imgContainerEl = document.querySelector('.gallery');

//Создание разметки
const markup = createMarkup(galleryItems);
  
function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return`
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`})
    .join("");
}

//Добавляем разметку в div-контейнер
imgContainerEl.innerHTML = markup;

const imgElArray = document.querySelectorAll('.gallery__image');

//Создаем клик по каждой картинке с открытием модального окна, но без перехода по ссылке
const addClickOnImg = imgElArray.forEach(imgEl => imgEl.addEventListener('click', clickOnImg));

function clickOnImg(event) {
  event.preventDefault();
  instance.show();
}

//Создание переменной, значением которой будет создание модального окна через basicLightbox
const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`);

//Как получить ссылку на каждую картину ?


// Реализация делегирования на div.gallery и получение url большого изображения

//Закрытие модального окна кнопокй Escape

