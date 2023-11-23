import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_iVRXTFBgS1uhJ1rEisghUDmOyFACosHTBcImoGZ2CEaMpFkeok8HYv8GTEWdXBb3';

export const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const fetchCatByBreed = breedId => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
