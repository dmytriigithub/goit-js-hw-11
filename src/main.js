import getImagesByQuery from "./js/pixabay-api";
import { clearGallery } from "./js/render-function";
import { form } from "./js/refs";

form.addEventListener('submit', handleSubmit);

export function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.search_text.value.trim();
    clearGallery();

    input ?
        getImagesByQuery(input) : alert('input is empty');

    form.reset();
}
