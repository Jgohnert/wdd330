import { fetchMovies } from "./getdata.js"

const featuredFilms = document.querySelector("#featured-films")

function movieTemplate(movies) {
    movies.forEach((movie) => {
        let template = `
        <section class="random-film-card">
          <a href="film-info.html?title=${movie.title}">
            <picture>
              <source srcset="${movie.poster_small}" media="(max-width: 600px)">
              <img src="${movie.poster}" alt="image of ${movie.title} poster">
            </picture>
            <h3>${movie.title}<h3>
          </a>
        </section>
        `;

        return featuredFilms.innerHTML += template;
    });
}

// Filters movies that have posters
async function filterByPoster() {
    const movies = await fetchMovies();
    const moviesWithPoster = movies.filter(movie => movie.poster !== "data/images/movie-poster-placeholder.webp");

    return getRandomFilms(moviesWithPoster);
}

export async function getRandomFilms(moviesWithPoster) {
   
    const randomFilms = [];

    // Gets three random movies with posters
    while (randomFilms.length < 3) {
        const randomIndex = Math.floor(Math.random() * moviesWithPoster.length);
        const randomFilm = moviesWithPoster[randomIndex];

        //Avoids duplicate movies
        if (!randomFilms.includes(randomFilm)) {
            randomFilms.push(randomFilm);        
        }
    }
    return randomFilms;
}

async function displayFeaturedFilms() {
    const threeFilms = await filterByPoster();
    movieTemplate(threeFilms);
}

displayFeaturedFilms();