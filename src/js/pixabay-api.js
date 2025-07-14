import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, showLoader, hideLoader } from './render-function';

import error from '../img/icons/error.svg';


const API_KEY = '51312083-0c9a0730bd4d2b20e847ab802';
const URL = `https://pixabay.com/api/`;
const params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
}

function getImagesByQuery(query) {
    showLoader();

    axios.get(URL, {
        params: {
            q: query,
            ...params
        }
    })
        .then(response => response.data.hits)
        .then(data => {
            data.length
                ? createGallery(data)
                : iziToast.error({
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
}


export default getImagesByQuery;