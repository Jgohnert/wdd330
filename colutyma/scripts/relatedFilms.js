// import { findMovieDetails } from "./getdata.js"

const apiKey = 'a88b8d75b03e9045807c15279149375f';
const baseUrl = 'https://api.themoviedb.org/3';


const relatedFilms = document.querySelector("#related-films");
const genre = document.querySelector("#movie-genre");

async function fetchGenre() {
    try {
        const response = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching popular movies:', error);
    }
}

fetchGenre();