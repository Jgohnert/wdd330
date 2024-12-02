import { fetchMovies } from "./getdata.js"

const filmList = document.querySelector("#film-list");
const movies = await fetchMovies();

// This is the template of for the movies that display on the movie list page.
async function movieListTemplate() {
    let template = "";

    movies.forEach((movie) => {
        template += `
        <div>
          <a href="film-info.html?title=${movie.title}">
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="image of ${movie.title} poster">
          </a>
          <p>${movie.rating}</p>
          <p>Genre: ${movie.genre}</p>
          <p>Synopsis</p>
          <div class="synopsis">
            <button type="button" class="synopsis-button"></button>
            <p>${movie.synopsis}</p>
          </div>
          <a href="#">Get</a>
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
  const sortByNew = document.querySelector(".sortby-new");

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

}

// Expands some of the info of each movie on the movie list page.
export function expandInfo() {
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