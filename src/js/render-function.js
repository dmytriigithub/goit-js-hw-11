import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { gallery, spinner } from "./refs";

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
            <div class="gallery-item-thumb">
                <a class="gallery-link"href=${largeImageURL}>
                    <img 
                        class="gallery-img"
                        src=${webformatURL}
                        alt=${tags.split(',')[0]}
                        width="360px"
                    />
                </a>
            </div>
            <ul class="gallery-info">
                <li class="gallery-info-item">
                    <p class="gallery-info-title">Likes</p>
                    <p class="gallery-info-value">${likes}</p>
                </li>
                <li class="gallery-info-item">
                    <p class="gallery-info-title">Views</p>
                    <p class="gallery-info-value">${views}</p>
                </li>
                <li class="gallery-info-item">
                    <p class="gallery-info-title">Comments</p>
                    <p class="gallery-info-value">${comments}</p>
            
                </li>
                    <li class="gallery-info-item">
                    <p class="gallery-info-title">Downloads</p>
                    <p class="gallery-info-value">${downloads}</p>
                </li>
            </ul>
        </li>`
    ).join('');

    gallery.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    spinner.style.display = 'flex';
}

export function hideLoader() {
    spinner.style.display = 'none';
}