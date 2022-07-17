'use strict';

const btnReset = document.querySelector('.js-btn-reset');

function resetAnime(event) {
  event.preventDefault();
  inputAnime.value = '';
  resultsList.innerHTML = '';
}

btnReset.addEventListener('click', resetAnime);