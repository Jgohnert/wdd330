import { fetchMovies } from "./getdata.js"

const filmList = document.querySelector("#film-list");

async function movieListTemplate() {
    const movies = await fetchMovies();
    let template = "";

    movies.forEach((movie) => {
        template += `
        <div>
        <a href="#">
          <h2>${movie.title}</h2>
          <img src="${movie.poster}" alt="image of ${movie.title} poster">
          <p>${movie.rating}</p>
          <p>Genre: ${movie.genre}</p>
          <p>Synopsis</p>
          <div class="synopsis">
            <button type="button" class="synopsis-button"></button>
            <p>${movie.synopsis}</p>
          </div></a>
          <a href="#">Get</a>
        </div>
        `;

    });

    return template;
}

async function displayMovieList() {
    const allMovies = await movieListTemplate();
    filmList.innerHTML = allMovies;

    // open and close synopsis
    const synopsisButtons = document.querySelectorAll(".synopsis-button");
    const synopses = document.querySelectorAll(".synopsis");

    synopsisButtons.forEach((synopsisButton, index) => {
        synopsisButton.addEventListener("click", () => {
            synopses[index].classList.toggle("open");
            synopsisButton.classList.toggle("open");
        });
    });
}

displayMovieList();