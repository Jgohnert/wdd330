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
    document.querySelector("#movie-poster-small").srcset = movie.poster_small;
    document.querySelector("#movie-poster-small").alt = movie.title;
    document.querySelector("#movie-poster").src = movie.poster;
    document.querySelector("#movie-poster").alt = movie.title;
    document.querySelector(".star-rating").innerText = movie.rating;
    document.querySelector("#movie-year").innerText = movie.year;
    document.querySelector("#movie-genre").innerText = movie.genre;
    document.querySelector("#movie-synopsis").innerText = movie.synopsis;
    
    const allCharacters = document.querySelector("#all-characters");
    
    movie.characters.forEach(character => {

        const characterCard = document.createElement("div");
        characterCard.className = "character-card";


        const charPosterImg = document.createElement("img");
        charPosterImg.src = character.charPoster;
        charPosterImg.alt = character.name;
        charPosterImg.style.width = "150px";

        const synopsisGrid = document.createElement("div");
        synopsisGrid.className = "synopsis-grid";

        const characterButtonName = document.createElement("h3");
        characterButtonName.textContent = `${(character.name).toUpperCase()}`;
        characterButtonName.className = "title-synopsis"

        const characterSynDiv = document.createElement("div");
        characterSynDiv.className = "synopsis";

        const characterButton = document.createElement("button");
        characterButton.className = "synopsis-button";

        const space = document.createElement("br");
        const space2 = document.createElement("br");

        const characterInfo = document.createElement("p");
        characterInfo.textContent = `Played by ${character.actor} `;

        characterInfo.appendChild(space);
        characterInfo.appendChild(space2);

        const descriptionText = document.createTextNode(character.description);
        characterInfo.appendChild(descriptionText);

        characterInfo.className = "synopsis-text";

        characterCard.appendChild(charPosterImg);
        characterCard.appendChild(synopsisGrid);

        characterSynDiv.appendChild(characterButton)

        synopsisGrid.appendChild(characterButtonName);
        synopsisGrid.appendChild(characterSynDiv);
        synopsisGrid.appendChild(characterInfo);

        allCharacters.appendChild(characterCard);


        
    });

    expandInfo();
}

findMovieDetails();