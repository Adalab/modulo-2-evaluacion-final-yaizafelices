'use strict';
//EVENTS

//Event button reset

const btnReset = document.querySelector('.js-btn-reset');

function handleClickReset(event) {
  event.preventDefault();
  inputAnime.value = '';
  resultsList.innerHTML = '';
  favoriteList.innerHTML = '';
  localStorage.removeItem('favorites_anime');
}

btnReset.addEventListener('click', handleClickReset);