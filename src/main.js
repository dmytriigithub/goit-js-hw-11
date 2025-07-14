import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import caution from './img/icons/caution.svg'

import getImagesByQuery from "./js/pixabay-api";
import { clearGallery } from "./js/render-functions";
import { form } from "./js/refs";

form.addEventListener('submit', handleSubmit);

export function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.search_text.value.trim();
    clearGallery();

    input ?
        getImagesByQuery(input) :
        iziToast.warning({
            messageColor: '#fff',
            iconUrl: caution,
            iconColor: '#ffffffff',
            maxWidth: '350px',
            position: 'topRight',
            color: '#ffa000',
            message: 'You forgot type your request',
        });

    form.reset();
}
