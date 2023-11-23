import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = new SlimSelect({
    select: '#breedSelect',
    placeholder: 'Select a breed',
    onChange: info => {
      const breedId = info.value();
      if (breedId) {
        displayLoader(true);
        fetchCatInfo(breedId);
      }
    },
  });

  // Fetch and populate breeds
  fetchBreeds().then(breeds => {
    breedSelect.setData(
      breeds.map(breed => ({ text: breed.name, value: breed.id }))
    );
    displayLoader(false);
  });

  function fetchCatInfo(breedId) {
    fetchCatByBreed(breedId)
      .then(cat => {
        displayLoader(false);
        displayCatInfo(cat);
      })
      .catch(error => {
        displayLoader(false);
        displayError();
      });
  }

  function displayCatInfo(cat) {
    const catImage = document.querySelector('.cat-image');
    const breedName = document.querySelector('.breed-name');
    const description = document.querySelector('.description');
    const temperament = document.querySelector('.temperament');

    catImage.src = cat.url;
    breedName.textContent = `Breed: ${cat.breeds[0].name}`;
    description.textContent = `Description: ${cat.breeds[0].description}`;
    temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

    document.querySelector('.cat-info').style.display = 'block';
  }

  function displayLoader(show) {
    document.querySelector('.loader').style.display = show ? 'block' : 'none';
  }

  function displayError() {
    document.querySelector('.error').style.display = 'block';
  }
});
