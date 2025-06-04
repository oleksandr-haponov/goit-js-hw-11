import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50679981-3c82f9b846616ba31889c4405'; // Может біть не мойлюч

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
