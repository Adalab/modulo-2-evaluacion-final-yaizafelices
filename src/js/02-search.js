'use strict';

let animes = [];

function renderAnime() {
    let html = '';
    for (const oneAnime of animes) {
        html += ` <li class="js-one-anime">`;
        html += ` <div class="js-container-anime">`;
        html += ` <h3>${oneAnime.title}</h3>`;
        html += ` <img class="anime_img" src=${animeImage} alt="Portada de la serie de anime ${oneAnime.title}"/>`;
        html += `</div></li>`;        
    }
    resultsList.innerHTML = html;
    // listenerAnimes();
}

function animeImage(data) {
    if (
      data.images.jpg.image_url ===
      "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ) {
      ("https://via.placeholder.com/210x295/ffffff/666666/?text=TV");
    } else {
      return data.images.jpg.image_url;
    }
  }

function getDataApi() {
    fetch(
      'https://api.jikan.moe/v4/anime?q=naruto'
    )
      .then((response) => response.json())
      .then((data) => {
        let animes = data.data;
      });
  }
  
  getDataApi();
