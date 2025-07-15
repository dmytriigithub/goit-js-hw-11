import axios from 'axios';

const API_KEY = '51312083-0c9a0730bd4d2b20e847ab802';
const URL = 'https://pixabay.com/api/';

const params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
};

function getImagesByQuery(query) {
    return axios.get(URL, {
        params: {
            q: query,
            ...params
        }
    })
}


export default getImagesByQuery;