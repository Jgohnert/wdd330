import { fetchActors } from "./getdata.js";

const actorList = document.querySelector("#actor-list");
const actors = await fetchActors();

// Template for the actors and their filmography
async function actorListTemplate() {
  let allActorCards = "";

  actors.forEach((actor) => {

    let actorCard = `
      <div class="actor-card">
        <div class="actor-div">
          <h3>${(actor.name).toUpperCase()}</h3>
          <img src="${actor.image}" alt="${actor.name}">
          <p>${actor.credentials}</p>
        </div>
        <hr>
        <h3>FILMOGRAPHY</h3>
        <div class="cred-div">
    `;

    actor.filmography.forEach((movie) => {
      let filmCard = `
        <div class="film-cred">
          <h4>${(movie.movie).toUpperCase()}</h4>
          <img src="${movie.poster}" alt="${movie.movie} Poster">
          <p>Role: ${movie.role}</p>
        </div>
      `;
      actorCard += filmCard;
    });

    actorCard += "</div>";
    actorCard += "</div>";
    allActorCards += actorCard;
  });

  return allActorCards; 
}

async function displayActorList() {
  const allActors = await actorListTemplate();
  actorList.innerHTML = allActors;
}

displayActorList();
