import axios from 'axios';

const apiKey = '40266655-7594f659fb55abd6ad22e6064';


const fetchImages = async (query, page, perPage) => {
  return await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
  
};

export { fetchImages };