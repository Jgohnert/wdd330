const mainURL = 'https://jgohnert.github.io/wdd330/';
const linksURL = 'https://jgohnert.github.io/wdd330/data/links.json';

const allActivities = document.querySelector('#activity');

async function getActivityLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const activities = data.lessons;

    displayActivity(activities);
}

const displayActivity = (activities) => {
    activities.forEach((activity) => {
        let activityList = document.createElement('li');
        let activityTitle = document.createTextNode(`Week ${activity.week} - `);

        activityList.appendChild(activityTitle);

        activity.links.forEach((link) => {
            let linkList = document.createElement('a');
            linkList.href = link.url.startsWith('http') ? link.url : mainURL + link.url;
            linkList.textContent = link.title;

            if (!link.url.endsWith('.docx')) {
                anchor.target = '_blank';
            }

            activityList.appendChild(linkList);

        });

        allActivities.appendChild(activityList);
    });
}

getActivityLinks()