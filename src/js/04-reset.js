'use strict';

const btnReset = document.querySelector('.js-btn-reset');

function handleClickReset(event) {
  event.preventDefault();
  inputAnime.value = '';
  resultsList.innerHTML = '';
}

btnReset.addEventListener('click', handleClickReset);