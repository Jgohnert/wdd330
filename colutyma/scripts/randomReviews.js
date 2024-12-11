import { renderRandomReviews, } from "./reviews.js"
import { getLocalStorage } from "./getdata.js";

const featuredReviews = document.querySelector("#review-list");

// This function gets the reviews from local storage and selects 2 
// random reviews to display on the main page.
function getRandomReviews() {
    const reviews = getLocalStorage("reviews");

    const allReviews = []; 

    // Flatten reviews to the allReviews array
    for (const filmId in reviews) {
        if (reviews.hasOwnProperty(filmId)) {
            allReviews.push(...reviews[filmId]); 
        }
    }

    const randomReviews = [];

    // Get 2 random reviews
    while (randomReviews.length < 2 && allReviews.length > 0) {
        const randomIndex = Math.floor(Math.random() * allReviews.length);
        const randomReview = allReviews[randomIndex];

        // Avoid duplicate reviews
        if (!randomReviews.includes(randomReview)) {
            randomReviews.push(randomReview);
        }
    }
    return randomReviews;
}

// This function displays the 2 randomly selected reviews from 
// getRandomReviews and displays 2 default reviews if the user has not made
// a review yet.
export function displayFeaturedReviews(filmId) {
    const threeReviews = getRandomReviews(filmId);
    if (threeReviews.length >= 2) {
        renderRandomReviews(threeReviews);
    } else {
        featuredReviews.innerHTML = `
        <div>
          <h4>2056</h4>
          <div class="user-review">
            <p>Anonymous<p>
            <p class="star-rating">★★★★★<p>
            <p>Recently watched 2056, and wow! it's an incredible thriller with so many hidden meanings behind the subtle plot and amazing acting.<p>
          </div>
        </div>
        <hr>
        <div>
          <h4>CELERITY</h4>
          <div class="user-review">
            <p>Anonymous<p>
            <p class="star-rating">★★★★☆<p>
            <p>Celerity is one of my all time favorites. This new version is much less depressing than the original cut.<p>
          </div>
        </div>
        <hr>
        `;
    }
}


displayFeaturedReviews();