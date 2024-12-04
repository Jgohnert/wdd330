const movieURL = "https://jgohnert.github.io/wdd330/colutyma/data/json/movies.json";
const actorURL = "https://jgohnert.github.io/wdd330/colutyma/data/json/actors.json";

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: "servicesError", message: data };
    }
}

export async function findMovieBy(title) {
    const response = await fetch(movieURL);
    const moviesData = await convertToJson(response);

    // Search for movie by title
    const movie = moviesData.movies.find(movie => movie.title === title);
    
    return movie;
}

export async function fetchMovies() {
    try {
        const response = await fetch(movieURL);
        const data = await response.json();
        const movies = data.movies;
        console.log(movies);
        return movies;
    } catch(error) {
        console.error("Error:", error);
    }
}

export async function fetchActors() {
    try {
        const response = await fetch(actorURL);
        const data = await response.json();
        const actors = data.actors;
        console.log(actors);
        return actors;
    } catch(error) {
        console.error("Error:", error);
    }
}