const createRepoCard = (repository) => {
  return `
      <div class="repository">
        <a href="${repository['html_url']}" target="_blank">${repository.name}</a>
        <p>${repository.language ? repository.language : 'Language undefined'}</p>
        <span>Author:</span>
        <img src="${repository.owner['avatar_url']}" alt="User avatar">
        <a href="${repository.owner['html_url']}" target="_blank">${repository.owner.login}</a>
      </div>`;
}

export { createRepoCard };
