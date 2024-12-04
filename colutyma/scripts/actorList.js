import { fetchActors } from "./getdata.js";

const actorList = document.querySelector("#actor-list");
const actors = await fetchActors();

async function actorListTemplate() {
    let template = "";

    actors.forEach((actor) => {
        template += `
        <div>
          <h3>${actor.name}</h3>
          <p>${actor.credentials}</p>
          <p>${actor.credentials}</p>
          <img src="${actor.image}" alt="${actor.name}">
        </div>
        <div>
          <h3>Filmography</h3>
          <img src="${actor.filmography.poster}">
        </div>
        `;

        actor.filmography.forEach((movie) => {
            template += `
            <div>
              <h4>${movie.movie}</h4>
              <img src="${movie.poster}" alt="${movie.movie} Poster">
              <p>Role: ${movie.role}</p>
            </div>
            `;
        });
    });
    return template;
}

async function displayActorList() {
    const allActors = await actorListTemplate();
    actorList.innerHTML = allActors;
}

displayActorList();