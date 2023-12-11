import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '40266655-7594f659fb55abd6ad22e6064';

export const fetchImagesByCategories = async (name, page) => {
  axios.defaults.params = {
    key: MY_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  };
  const { data } = await axios.get(`${BASE_URL}?q=${name}`);
  return data;
};