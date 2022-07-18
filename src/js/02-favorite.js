'use strict';

let favoritesAnimes = [];

function handleClickAnime (event) {
  console.log(event.currentTarget.id);
}

function listenerAnimes(){
  const liAnimes = document.querySelectorAll('.js-list-anime');
  for (const li of liAnimes){
    li.addEventListener('click', handleClickAnime);
  }
}