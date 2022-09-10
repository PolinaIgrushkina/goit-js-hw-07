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

//Делегирование клика по картинке на div-контейнер
imgContainerEl.addEventListener('click', clickOnImg);

//Функция клика по картинке с открытием модального окна, но без перехода по ссылке
function clickOnImg(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault();
  
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  
  instance.show();
  
  //Закрытие модального окна кнопокй Escape
  document.addEventListener('keydown', clickOnEscape);
  
  function clickOnEscape(event) {
  if (event.code !== "Escape") {
    return;
  };

  instance.close();

  document.removeEventListener('keydown', clickOnEscape);
};
};

