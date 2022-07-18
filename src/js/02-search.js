'use strict';

const resultsList = document.querySelector('.js-results-list');
const inputAnime = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn-search');

const handleClickSearch = (event) => {
  event.preventDefault();
  let inputValue = inputAnime.value.toLowerCase();
  getDataApi(inputValue);
};

btnSearch.addEventListener('click', handleClickSearch);

function renderAnime(dataAnimes) {
  let html = '';
  for (const oneAnime of dataAnimes) {
    let imageUrl = animeImage(oneAnime);

    html += ` <li class="js-one-anime">`;
    html += ` <div class="js-container-anime">`;
    html += ` <h3>${oneAnime.title}</h3>`;
    html += ` <img class="anime_img" src="${imageUrl}" alt="Portada de la serie de anime ${oneAnime.title}" title="Portada de la serie de anime ${oneAnime.title}"/>`;
    html += `</div></li>`;
  }
  resultsList.innerHTML = html;
  // listenerAnimes();
}


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


function getDataApi(filterAnime) {
  fetch(
    'https://api.jikan.moe/v4/anime?q='+filterAnime
  )
    .then((response) => response.json())
    .then((data) => {
      renderAnime(data.data);
    });
}
