import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40266655-7594f659fb55abd6ad22e6064';

const getImages = async (search, page) => {
  const response = await axios.get(BASE_URL, {
    method: 'get',
    params: {
      key: API_KEY,
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
  return response;
};

export default getImages;