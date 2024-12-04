import { fetchActors } from "./getdata.js";

const actorList = document.querySelector("#actor-list");
const actors = await fetchActors();

async function actorListTemplate() {
    let template = "";

    actors.forEach((actor) => {
        template += `
        <div>
          <h2>${actor.name}<h2>
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