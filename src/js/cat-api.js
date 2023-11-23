import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_iVRXTFBgS1uhJ1rEisghUDmOyFACosHTBcImoGZ2CEaMpFkeok8HYv8GTEWdXBb3';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}
