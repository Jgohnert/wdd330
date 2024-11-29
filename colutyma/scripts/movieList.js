import { fetchMovies } from "./getdata.js"

const filmList = document.querySelector("#film-list");

async function movieListTemplate() {
    const movies = await fetchMovies();
    let template = "";

    movies.forEach((movie) => {
        template += `
        <div>
          <h2>${movie.title}</h2>
          <img src="${movie.poster}" alt="image of ${movie.title} poster">
          <p>${movie.rating}</p>
          <p>Genre: ${movie.genre}</p>
          <p>Synopsis</p>
          <button>span arrow</button>
          <a href="#">Get</a>
        </div>
        `;

    });

    return template;
}

async function displayMovieList() {
    const allMovies = await movieListTemplate();
    filmList.innerHTML = allMovies;
}

displayMovieList();
