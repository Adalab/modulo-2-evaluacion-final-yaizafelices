'use strict';

//VARIABLES
const resultsList = document.querySelector('.js-results-list');
const inputAnime = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn-search');
const favoriteList = document.querySelector('.js-favorite-list');

let dataAnimes = [];
let favoritesAnimes = [];

loadAnimesLocalStorage();

//EVENTS

//Event button search

const handleClickSearch = (event) => {
  event.preventDefault();
  let inputValue = inputAnime.value.toLowerCase();
  getDataApi(inputValue);
};

btnSearch.addEventListener('click', handleClickSearch);

//Event click on one anime

function listenerAnimes(){
  const liAnimes = document.querySelectorAll('.js-list-anime');
  for (const li of liAnimes){
    li.addEventListener('click', handleClickAnime);
  }
}

function handleClickAnime (event) {
  const idSelected = parseInt(event.currentTarget.id);
  const animeFound = dataAnimes.find((anime)=> anime.mal_id === idSelected);

  //findIndex si se encuentra ya en el array de favoritesAnimes te devuelve la posición y sino te devuelve -1

  //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
  //splice(la posición inicial desde la que borramos,cuántos elementos queremos borrar)
  const favoriteFound = favoritesAnimes.findIndex((fav)=> fav.mal_id === idSelected);
  if(favoriteFound === -1){
    favoritesAnimes.push(animeFound);
  }
  else{
    favoritesAnimes.splice(favoriteFound,1);
  }

  localStorage.setItem('favorites_anime', JSON.stringify(favoritesAnimes));
  renderAnime();
  renderFavoriteAnime();
}


//FUNCTIONS

//Function renderAnime (to paint the anime in results)

function renderAnime() {
  let html = '';
  let classFavorite = '';

  for (const oneAnime of dataAnimes) {
    let imageUrl = animeImage(oneAnime);

    const favoriteFoundIndex = favoritesAnimes.findIndex((fav)=> oneAnime.mal_id === fav.mal_id);

    if(favoriteFoundIndex !== -1){
      classFavorite = 'favorite-click';
    }
    else{
      classFavorite = '';
    }

    html += ` <li class="js-list-anime anime__results-list ${classFavorite}" id="${oneAnime.mal_id}">`;
    html += ` <div class="js-container-anime">`;
    html += ` <h3 class="anime__results-list-title">${oneAnime.title}</h3>`;
    html += ` <img class="anime_img" src="${imageUrl}" alt="Portada de la serie de anime ${oneAnime.title}" title="Portada de la serie de anime ${oneAnime.title}"/>`;
    html += `</div></li>`;
  }
  resultsList.innerHTML = html;
  listenerAnimes();
}

//Function animeImage (to change the images that are "MAL" to "TV")

function animeImage(data) {
  if (
    data.images.jpg.image_url ===
    'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
  ) {
    return 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
  } else {
    return data.images.jpg.image_url;
  }
}

//Function renderFavoriteAnime (to paint the anime in favorites)

function renderFavoriteAnime(){
  let storageFavoritesAnimes = JSON.parse(localStorage.getItem('favorites_anime'));


  let html = '';

  for (const oneAnimeFavorite of storageFavoritesAnimes) {
    let imageUrl = animeImage(oneAnimeFavorite);

    html += ` <li class=" anime__favorite-list  id="${oneAnimeFavorite.mal_id}">`;
    html += ` <div class="js-container-anime">`;
    html += ` <div><h3 class="anime__favorite-list-title">${oneAnimeFavorite.title}</h3>`;
    html += `<i class="fa-solid fa-trash-xmark"></i></div>`;
    html += ` <img class="anime_img" src="${imageUrl}" alt="Portada de la serie de anime ${oneAnimeFavorite.title}" title="Portada de la serie de anime ${oneAnimeFavorite.title}"/>`;
    html += `</div></li>`;
  }


  favoriteList.innerHTML = html;
}

renderFavoriteAnime();

//Function

function loadAnimesLocalStorage()
{
  favoritesAnimes = JSON.parse(localStorage.getItem('favorites_anime'));
  if (!Array.isArray(favoritesAnimes)) {
    favoritesAnimes = [];
  }
}



//TO OBTAIN DATA OF THE API

function getDataApi(filterAnime) {
  fetch(
    'https://api.jikan.moe/v4/anime?q='+filterAnime
  )
    .then((response) => response.json())
    .then((data) => {
      dataAnimes = data.data;
      renderAnime();
    });
}


