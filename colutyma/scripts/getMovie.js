import { fetchMovies } from "./getdata.js";

const addToShippingDiv = document.querySelector("#add-to-shipping");

// displays the button to get a movie on the movie-info.html page
function getMoviebutton(movie) {
    let template = `
        <a href="donations.html?title=${movie.title}" id="get-movie-link">Get Movie</a>
    `;
    addToShippingDiv.innerHTML = template;
}

// puts the title of the movie from the url on the movie info page, 
// to the link that takes the user to the donation page.
async function displayGetButton() {
    const movies = await fetchMovies();
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get("title");

    const movie = movies.find(movie => movie.title === movieTitle);
    
    getMoviebutton(movie); 
}

displayGetButton();