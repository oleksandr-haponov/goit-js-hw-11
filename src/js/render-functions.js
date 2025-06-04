import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${largeImageURL}">
          <img class="gallery__image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </li>
    `)
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader-container').classList.remove('is-hidden');
}

export function hideLoader() {
  document.querySelector('.loader-container').classList.add('is-hidden');
}
