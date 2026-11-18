
const projectLinksURL = 'https://jgohnert.github.io/wdd330/data/project-links.json';

const allProjects = document.querySelector('#projects');

async function getProjectLinks() {
    const response = await fetch(projectLinksURL);
    const data = await response.json();
    const projectActivities = data.projects;

    displayProjectActivity(projectActivities);
}

const displayProjectActivity = (projectActivities) => {
    projectActivities.forEach((project) => {

        project.links.forEach((link) => {
            let linkList = document.createElement('a');

            linkList.href = link.url.startsWith('http')
                ? link.url
                : 'https://' + link.url;

            linkList.textContent = link.title;
            linkList.classList.add('project-link');
            linkList.target = '_blank';

            allProjects.appendChild(linkList);
        });

    });
};

getProjectLinks();
