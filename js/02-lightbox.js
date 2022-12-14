import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);


//Создание списка ul, в который будем добавлять карточки картинкок
const ulContainerEl = document.querySelector('.gallery');

//Создание разметки
const markup = createMarkup(galleryItems);
  
function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return`
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`})
    .join("");
}

//Добавляем разметку в ul-контейнер
ulContainerEl.innerHTML = markup;

//Открытие модального окна с опциями через библиотеку SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250,});


