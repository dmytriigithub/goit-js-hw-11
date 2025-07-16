import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import caution from './img/icons/caution.svg';
import error from './img/icons/error.svg';

import getImagesByQuery from "./js/pixabay-api";
import { form } from "./js/refs";
import { createGallery, showLoader, hideLoader, clearGallery } from './js/render-functions';

form.addEventListener('submit', handleSubmit);

export function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.search_text.value.trim();
    clearGallery();

    if (input) {
        showLoader();
        getImagesByQuery(input)
            .then(data => {
                data.length ?
                    createGallery(data) :
                    iziToast.error({
                        messageColor: '#fff',
                        iconColor: '#fff',
                        maxWidth: '350px',
                        iconUrl: error,
                        position: 'topRight',
                        color: '#ef4040',
                        message: 'Sorry, there are no images matching your search query. Please try again!'
                    });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => hideLoader());
    } else {
        iziToast.warning({
            messageColor: '#fff',
            iconUrl: caution,
            iconColor: '#ffffffff',
            maxWidth: '350px',
            position: 'topRight',
            color: '#ffa000',
            message: 'You forgot type your request',
        });
    }
    form.reset();
}
