import axios from 'axios';
// Збереження ключа API в окремому файлі змінних
import { KEY } from './api-key.js';
// Fetch images from Pixabay API using Axios

async function fetchImages(query, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  
  try {
    const response = await axios.get(
      `${baseURL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImages };