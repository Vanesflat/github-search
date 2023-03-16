import { createRepoCard } from './repository-card.js';

const PER_PAGE = 10;

const form = document.querySelector('.form-search');
const input = document.querySelector('input');
const repositoriesContainer = document.querySelector('.repositories');

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const response = await fetch(`https://api.github.com/search/repositories?q=${input.value}&per_page=${PER_PAGE}`);

  try {
    const data = await response.json();
    input.value = '';
    repositoriesContainer.innerHTML = '';

    if (!data.items.length) {
      throw new Error('Ничего не найдено');
    }

    const repositoriesCards = data.items.map((item) => createRepoCard(item)).join('');
    repositoriesContainer.innerHTML = repositoriesCards;

  } catch (err) {
    alert(`Ошибка! ${err}`);
  }
});
