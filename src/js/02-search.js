'use strict';

let animeDataList = [];

function renderAnimes(animeData) {
    const anime = `<li class="list">
        <h3 class="card_title">${animeData.title}</h3>
        <img
            class="anime_img"
            src=${animeData.image_url}
            alt="Portada de la serie de anime"
        />
    </li>`;
    return anime;
}



// function renderAnimes() {
//     let html = '';
//     for (const oneAnime of animesDataList) {
//       html += ` <li class="js-results-list">`;
//       html += ` <h3>${oneAnime.title}</h3>`;
//       html += `<img
//       class="anime_img"
//       src=${oneAnime.image}
//       alt="Imagen de la portada de la serie"
//     />`;
//       html += ` </li>`;
//     }
//     animesDataList.innerHTML = html;
//   }

// function getDataApi() {
//     fetch(
//       'https://api.jikan.moe/v4/anime?q=naruto'
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         animes = data.animes;
//         localStorage.setItem('data', JSON.stringify(animes));
//         renderAnimes(animes);
//       });
//   }
//   getDataApi();