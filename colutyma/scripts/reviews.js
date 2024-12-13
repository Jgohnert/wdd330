import { getLocalStorage, setLocalStorage} from "./getdata.js";

// This is the review section where the user can type their review specific to 
// the movie they want to critique.
export function renderReviewSection(filmId) {
    const reviewSection = document.querySelector("#user-reviews");
  
    if (reviewSection) {

        reviewSection.innerHTML = `
          <h3>REVIEWS</h3>
          <form id="review-form">
            <h4>LEAVE A REVIEW</h4>
            <textarea id="review-input" placeholder="Leave your review of the movie here..." required></textarea>
            <div class="stars">
              <strong>Rate this movie to post:</strong>
              <input type="radio" id="onestar" name="star" value="1" required>
              <label for="onestar" class="star-label"></label>
              <input type="radio" id="twostar" name="star" value="2">
              <label for="twostar" class="star-label"></label>
              <input type="radio" id="threestar" name="star" value="3">
              <label for="threestar" class="star-label"></label>
              <input type="radio" id="fourstar" name="star" value="4">
              <label for="fourstar" class="star-label"></label>
              <input type="radio" id="fivestar" name="star" value="5">
              <label for="fivestar" class="star-label"></label>
              </div>
            <button type="submit">POST</button>
          </form>
          <ul id="review-list"></ul>
        `;
      
    renderReviews(filmId);
    setReviewValues(filmId);
    }
}

// This creates the format of the user review in local storage. It saves the name 
// of the user as anonymous, sets the movie title to the movie the user is reviewing,
// the user's rating, and so on.
function setReviewValues(filmId) {
    document.querySelector("#review-form").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const reviewInput = document.querySelector("#review-input");
        const userRating = document.querySelector("input[name='star']:checked"); 
    
        const newReview = reviewInput.value.trim();

        // Get the rating value as an integer
        const rating = parseInt(userRating.value);  
        const userName = "Anonymous";
        const movieTitle = `${filmId}`
         
        // Save the Reviews with the rating
        saveReview(filmId, { movie: movieTitle, user: userName, text: newReview, rating: rating });

        renderReviews(filmId);
         
        // Clear the Reviews input field
        reviewInput.value = "";
    });
}

// This renders the 2 random featured reviews on the main page
export function renderRandomReviews(reviews) {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";

    // Render existing reviews
    reviews.forEach(review => {
    
        // Generate the star rating with stars
        const rating = review.rating;
        const fullStars = Math.floor(rating);  
        const emptyStars = 5 - fullStars 
    
        // Create the star rating display
        const stars = "★".repeat(fullStars) + "☆".repeat(emptyStars);
    
        reviewList.innerHTML += `
          <div id="user-review-list">
            <h4>${review.movie}</h4>
            <div id="user-review">
              <p>${review.user} <span class="star-rating">${stars}</span></p>
              <p>${review.text}</p>
            </div>
          </div>
          <hr>
        `;
      });
    return reviewList;
}

// This renders all of the featured reviews of a specific 
// movie on the movie info page.
export function renderReviews(filmId) {
  const reviews = getReviews(filmId);

  renderRandomReviews(reviews)

}
// Get the saved reviews
export function getReviews(filmId) {
    const reviews = getLocalStorage("reviews") || {};
    return reviews[filmId] || [];
}

// Saves the movie reviews to local storage named "reviews"
export function saveReview(filmId, review) {
    const reviews = getLocalStorage("reviews") || {};
    if (!reviews[filmId]) {
        reviews[filmId] = [];
    }
    reviews[filmId].push(review);
    setLocalStorage("reviews", reviews);
}

renderReviewSection();