import { getReviews, renderRandomReviews, } from "./reviews.js"

const featuredReviews = document.querySelector("#review-list");

// function reviewTemplate(reviews) {
//     reviews.forEach((review) => {
//         let template = `
//         <section>
//           <h4>${review.user}</h4>
//           <p>${review.text}</p>
//           <p>${review.rating}</p>
//         </section>
//         `;
//         featuredReviews.innerHTML += template;
//     });
// }

function getRandomReviews(productId) {
    const reviews = getReviews(productId);

    const randomReviews = [];

    // Get three random reviews
    while (randomReviews.length < 3 && randomReviews.length < reviews.length) {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        const randomReview = reviews[randomIndex];

        // Avoid duplicate reviews
        if (!randomReviews.includes(randomReview)) {
            randomReviews.push(randomReview);
        }
    }
    return randomReviews;
}


export function displayFeaturedReviews(productId) {
    const threeReviews = getRandomReviews(productId);
    if (threeReviews.length > 3) {
        renderRandomReviews(threeReviews);
    } else {
        featuredReviews.innerHTML = "<p>There are currently no reviews. start leaving reviews and be the first to be featured here!</p>";
    }
}


displayFeaturedReviews();