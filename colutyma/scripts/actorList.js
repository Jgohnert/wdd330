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
          <h3>${actor.name}</h3>
          <p>${actor.credentials}</p>
          <img src="${actor.image}" alt="${actor.name}">
        </div>
        <h3>Filmography</h3>
    `;

    actor.filmography.forEach((movie) => {
      actorCard += `
        <div class="cred-div">
          <h4>${movie.movie}</h4>
          <img src="${movie.poster}" alt="${movie.movie} Poster">
          <p>Role: ${movie.role}</p>
        </div>
      `;
    });

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