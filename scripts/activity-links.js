const mainURL = 'https://jgohnert.github.io/wdd330/';
const linksURL = 'https://jgohnert.github.io/wdd330/data/links.json';

const allActivities = document.querySelector('#activity');

async function getActivityLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const webActivities = data.webclasses;
    const codeActivities = data.codeclasses;

    displayWebActivity(webActivities);
    displayCodeActivity(codeActivities);
}

const displayCodeActivity = (activities) => {
    activities.forEach((activity) => {
        let activityList = document.createElement('li');
        let activityTitle = document.createTextNode(`Week ${activity.week}`);

        activityList.appendChild(activityTitle);

        let numberedList = displayList(activity.links);

        activityList.appendChild(numberedList);
        allActivities.appendChild(activityList);
        
    });
}

const displayWebActivity = (classActivities) => {
    classActivities.forEach((classActivity) => {
        let activityList = document.createElement('li');
        let activityTitle = document.createTextNode(`WDD ${classActivity.wdd}`);

        activityList.appendChild(activityTitle);

        let numberedList = displayList(classActivity.links);
        
        activityList.appendChild(numberedList);
        allActivities.appendChild(activityList);
        
    });
}

let displayList = (links) => {
    let numberedList = document.createElement('ol');

    links.forEach((link) => {
        let myLinks = document.createElement('li'); 
        let linkList = document.createElement('a');
        
        linkList.href = link.url.startsWith('http') ? link.url : mainURL + link.url;
        linkList.textContent = link.title;
        
        myLinks.appendChild(linkList);
        numberedList.appendChild(myLinks);
    });

    return numberedList;
}

getActivityLinks()