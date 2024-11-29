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

function getRandomReviews(filmId) {
    const reviews = getReviews(filmId);

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


export function displayFeaturedReviews(filmId) {
    const threeReviews = getRandomReviews(filmId);
    if (threeReviews.length >= 3) {
        renderRandomReviews(threeReviews);
    } else {
        featuredReviews.innerHTML = `
        <div>
          <strong>Anonymous</strong>
          <p>Recently watched 2056, and wow! it's an incredible thriller with so many hidden meanings behind the subtle plot and amazing acting.<p>
          <p>★★★★★<p>
        </div>
        <div>
          <p>Anonymous<p>
          <p>Celerity is one of my all time favorites. This new version is much less depressing than the original cut.<p>
          <p>★★★★☆<p>
        </div>
        <div>
          <p>Anonymous<p>
          <p>Ben Jack and Classified is hilarious! The skits are clever and the story is so unique. I highly recommend this series.<p>
          <p>★★★★★<p>
        </div>
        `;
    }
}


displayFeaturedReviews();