import { fetchMovies } from "./getdata.js";

const filmList = document.querySelector("#film-list");
const movies = await fetchMovies();

// This is the template of for the movies that display on the movie list page.
async function movieListTemplate() {
    let template = "";

    movies.forEach((movie) => {
        template += `
        <div class="movie-card">
          <div class="movie-link">
            <a href="film-info.html?title=${movie.title}">
              <h2>${movie.title}</h2>
              <picture>
                <source srcset="${movie.poster_small}" media="(max-width: 600px)">
                <img src="${movie.poster}" alt="image of ${movie.title} poster">
              </picture>
            </a>
          </div>
          <hr class="movie-list-hr">
          <p class="star-rating">${movie.rating}</p>
          <p class="card-genre">Genre: ${movie.genre}</p>
          <p class="card-year">Year: ${movie.year}<p>
          <div class="synopsis-grid">
            <p class="title-synopsis">Synopsis</p>
            <div class="synopsis">
              <button type="button" class="synopsis-button"></button>
            </div>
            <p class="synopsis-text">${movie.synopsis}</p>
          </div>
        </div>
        `;
    });
    return template;
}

// This function displays all the movies on the movie list page.
async function displayMovieList() {
    const allMovies = await movieListTemplate();
    filmList.innerHTML = allMovies;

    // open and close synopsis
    expandInfo();
    sortMovieList();
}

// Get's the number of full stars on each movie from the movie list
function getNumerOfStars(stars) {
  return stars.split("★").length - 1;  // This will return the count of "★"
}

// Displays the ordered list depending on how the user
// wants the movies sorted.
async function sortMovieList() {

  const sortByName = document.querySelector(".sortby-name");
  const sortByRating = document.querySelector(".sortby-rating");
  const sortByNewest = document.querySelector(".sortby-newest");

  sortByName.addEventListener("click", () => {
    movies.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    displayMovieList();
  });

  sortByRating.addEventListener("click", () => {
    movies.sort((a, b) => {

      const rA = getNumerOfStars(a.rating);
      const rB = getNumerOfStars(b.rating);

      return rB - rA;
    });
    displayMovieList();
  });

  sortByNewest.addEventListener("click", () => {
    movies.sort((a, b) => {

      return b.year - a.year;
    });
    displayMovieList();
  });

}

// Expands some of the info of each movie on the movie list page.
export function expandInfo() {
  const synopsisButtons = document.querySelectorAll(".synopsis-button");
  const synopsisTexts = document.querySelectorAll(".synopsis-text");

  synopsisButtons.forEach((synopsisButton, index) => {
    synopsisButton.addEventListener("click", () => {
      synopsisButton.classList.toggle("open");
      synopsisTexts[index].classList.toggle("open");
    });
  });

  synopsisTexts.forEach((synopsisText, synopsisButton) => {
    if (synopsisTexts && synopsisButton === "open") {
      document.addEventListener("click", () => {
        synopsisText.style.display = "none"
      });
    }
    }
)};
  

displayMovieList();