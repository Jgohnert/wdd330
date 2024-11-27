import { fetchMovies } from "./getdata.js"

const featuredFilms = document.querySelector("#featured-films")

function movieTemplate(movies) {
    movies.forEach((movie) => {
        let template = `
        <section>
          <img src="${movie.poster}" alt="image of ${movie.title} poster">
          <h3>${movie.title}<h3>
        </section>
        `;

        return featuredFilms.innerHTML += template;
    })
}

async function getRandomFilms() {
    const movies = await fetchMovies();

    // Filters movies that have posters
    const moviesWithPoster = movies.filter(movie => movie.poster !== "data/images/movie-poster-placeholder.webp");
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
    const threeFilms = await getRandomFilms() 
    movieTemplate(threeFilms);
}

displayFeaturedFilms();