const mainURL = 'https://jgohnert.github.io/';
const linksURL = 'https://jgohnert.github.io/wdd330/data/project-links.json';

const allActivities = document.querySelector('#projects');

async function getProjectLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const projectActivities = data.projects;

    displayProjectActivity(projectActivities);
}

const displayProjectActivity = (projectActivities) => {
    projectActivities.forEach((project) => {
        let activityList = document.createElement('div');
        let activityTitle = document.createElement('h3');

        activityTitle.textContent = `WDD ${project.wdd}`;

        activityList.appendChild(activityTitle);

        project.links.forEach((link) => {
            let linkList = document.createElement('a');

            linkList.href = link.url.startsWith('http')
                ? link.url
                : mainURL + link.url;

            linkList.textContent = link.title;
            linkList.classList.add('project-link');

            activityList.appendChild(linkList);
        });

        allActivities.appendChild(activityList);
    });
};

getProjectLinks();
