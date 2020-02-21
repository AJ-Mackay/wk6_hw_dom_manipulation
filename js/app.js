document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.createElement('button');
  const body = document.querySelector('body');
  body.appendChild(button);
  button.textContent = 'Clear List';
  button.addEventListener('click', handleButtonClick);
});

const handleButtonClick = function () {
  const watchList = document.querySelector('ul');
  watchList.innerHTML = '';
}

const handleFormSubmit = function () {
  event.preventDefault();
  const newListItem = createWatchListItem(event.target);
  const list = document.querySelector('ul');
  list.appendChild(newListItem);
  event.target.reset();
}

const createWatchListItem = function (form) {
  const watchListItem = document.createElement('li');
  watchListItem.classList.add('watch-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  watchListItem.appendChild(title);

  const year = document.createElement('h3');
  year.textContent = form.year.value;
  watchListItem.appendChild(year);

  const rating = document.createElement('img');
  rating.src = form.rating.value;
  watchListItem.appendChild(rating);

  return watchListItem;
}
