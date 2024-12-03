import { getRandomFilms } from "./randomFilms.js"

const apiKey = 'a88b8d75b03e9045807c15279149375f';
const baseUrl = 'https://api.themoviedb.org/3';


const relatedFilms = document.querySelector("#related-films");
const genre = document.querySelector("#movie-genre");

// Fetches the list of genres from the TMDB API
async function fetchGenres() {
    try {
        const response = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Error fetching genre from movies:', error);
    }
}

// Gets the genre's from the movie JSON file and separates the genre
// by the commas
export function getFilmGenre(movie) {
    const genre = movie.genre.split(",");
    return genre;
}

// Returns an array of movies related by genre from the TMDB API
async function fetchMoviesByGenre(genreId) {
    try {
        // Join genres as comma separated string
        const joinedGenres = genreId.join(",");
        const response = await fetch(
            `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${joinedGenres}&language=en-US`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching related movies from TMDB:', error);
    }
}

// Finds the matching genre's on the JSON file and TMDB to display 
// the related films from TMDB that match the COLUTYMA film on the JSON file.
async function findRelatedFilms(jsonGenre) {
    const tmdbGenres = await fetchGenres();

    // the tmdbGenreObj is an object with list of genre from the tmdbGenres that match the 
    // genre of the jsonGenre.
    const genreIds = jsonGenre.map(genre => {
        const tmdbGenreObj = tmdbGenres.find(g => g.name.trim() === genre.trim());
        return tmdbGenreObj ? tmdbGenreObj.id : null;
    }).filter(id => id !== null);

    if (genreIds.length > 0) {
        const relatedMovies = await fetchMoviesByGenre(genreIds);

        return relatedMovies
        // Render the related films on the page
    }
}

async function displayRelatedFilms(movie) {
    const jsonGenre = getFilmGenre(movie);  // Get genres from JSON movie list

    // Fetch related films from TMDB
    const relatedMovies = await findRelatedFilms(jsonGenre);
    
    if (relatedMovies && relatedMovies.length > 0) {
        // Get 3 random films from the related movies
        const randomFilms = await getRandomFilms(relatedMovies);

        // Render the related films on the page
        relatedFilms.innerHTML = randomFilms.map(movie => `
            <div class="related-film">
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <h4>${movie.title}</h4>
            </div>
        `).join("");
    }
}


export function showRelatedFilms(movie) {
    displayRelatedFilms(movie);  
}