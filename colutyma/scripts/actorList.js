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
          <img src="" alt="${actor.name}">
        </div>
        `;
    });
    return template;
}

async function displayActorList() {
    const allActors = await actorListTemplate();
    actorList.innerHTML = allActors;
}

displayActorList();