import { handleFetch } from './helper/fetch';
import './style.css';

const PARAMS = [
  'character',
  'location',
  'episode',
];

const listContainer = document.querySelector('.list-container');
const characterButton = document.querySelector('#character');
const locationButton = document.querySelector('#location');
const episodeButton = document.querySelector('#episode');

function createCard(cardInfo) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardTitle = document.createElement('h2');
  cardTitle.innerText = cardInfo.name;

  if (cardInfo.image) {
    const cardImage = document.createElement('img');
    cardImage.src = cardInfo.image;
    card.appendChild(cardImage);
  }

  card.appendChild(cardTitle);
  
  listContainer.appendChild(card);
}

characterButton.addEventListener('click', async () => {
  const { results } = await handleFetch('character');
  listContainer.innerHTML = '';
  results.forEach(createCard);
});

locationButton.addEventListener('click', async () => {
  const { results } = await handleFetch('location');
  listContainer.innerHTML = '';
  results.forEach(createCard);
});

episodeButton.addEventListener('click', async () => {
  const { results } = await handleFetch('episode');
  listContainer.innerHTML = '';
  results.forEach(createCard);
});

async function pageDidMount() {
  const promises = PARAMS.map((url) => handleFetch(url));
  const results = await Promise.all(promises);
  results.forEach((result) => result.results.forEach(createCard));
}

window.onload = function() {
  pageDidMount();
}
