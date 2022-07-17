'use strict';

let animes = [];
const resultsList = document.querySelector('.js-results-list');

function renderAnime(animes) {
  let html = '';
  for (const oneAnime of animes) {
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

function getDataApi() {
  fetch(

    'https://api.jikan.moe/v4/anime?'
  )
    .then((response) => response.json())
    .then((data) => {
      let animes = data.data;
      renderAnime(animes);
    });
}

getDataApi();
