import { findMovieBy } from "./getdata.js"
import { renderReviewSection } from "./reviews.js"
import { expandInfo } from "./movieList.js"
import { showRelatedFilms } from "./relatedFilms.js"

export async function findMovieDetails() {

    // Gets the movie title from the URL
    const urlTitle = new URLSearchParams(window.location.search);
    const movieTitleId = urlTitle.get("title");

    console.log("Movie ID fetched:", movieTitleId);
    const movie = await findMovieBy(movieTitleId);
    
    renderMovieDetails(movie);
    renderReviewSection(movieTitleId);
    showRelatedFilms(movie);
}

function renderMovieDetails(movie) {
    document.querySelector("#movie-name").innerText = movie.title;
    document.querySelector("#movie-poster").src = movie.poster;
    document.querySelector("#movie-poster").alt = movie.title;
    document.querySelector("#movie-rating").innerText = movie.rating;
    document.querySelector("#movie-genre").innerText = movie.genre;
    document.querySelector("#movie-synopsis").innerText = movie.synopsis;
    
    const allCharacters = document.querySelector("#all-characters");
    
    movie.characters.forEach(character => {
        const charPosterImg = document.createElement("img");
        charPosterImg.src = character.charPoster;
        charPosterImg.alt = character.name;

        const characterButtonName = document.createElement("h3");
        characterButtonName.textContent = `${character.name}`;

        const characterButton = document.createElement("button");
        characterButton.className = "synopsis-button";

        const characterInfoDiv = document.createElement("div");
        characterInfoDiv.className = "synopsis";

        const actorName = document.createElement("p");
        actorName.textContent = `Played by ${character.actor}`

        const characterInfo = document.createElement("p");
        characterInfo.textContent = `${character.description}`

        characterInfoDiv.appendChild(actorName);
        characterInfoDiv.appendChild(characterInfo);

        allCharacters.appendChild(charPosterImg);
        allCharacters.appendChild(characterButtonName);
        allCharacters.appendChild(characterButton);
        allCharacters.appendChild(characterInfoDiv);


        
    });

    expandInfo();
}

findMovieDetails();