const baseURL = 'https://jgohnert.github.io/wdd330/';
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
        let activityTitle = document.createElement('p');
        lessonTitle.textContent = `week ${activity.week} - `;

        activityList.appendChild(activityTitle);
    });
}


getActivityLinks()