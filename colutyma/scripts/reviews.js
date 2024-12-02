import { getLocalStorage, setLocalStorage} from "./getdata.js";
// import { displayFeaturedReviews } from "./randomReviews.js"

// This is the review section where the user can type their review specific to 
// the movie they want to critique.
export function renderReviewSection(filmId) {
    const reviewSection = document.querySelector("#user-reviews");
  
    if (reviewSection) {

        reviewSection.innerHTML = `
          <h3>REVIEWS</h3>
          <hr>
          <ul id="review-list"></ul>
          <h4>Add New Review</h4>
          <form id="review-form">
            <textarea id="review-input" placeholder="Leave your review here..." required></textarea>
            <div id="stars">
              <label for="onestar"></label>
              <input type="radio" id="onestar" name="stars" value="1" required>
              <label for="twostar"></label>
              <input type="radio" id="twostar" name="stars" value="2" required>
              <label for="threestar"></label>
              <input type="radio" id="threestar" name="stars" value="3" required>
              <label for="fourstar"></label>
              <input type="radio" id="fourstar" name="stars" value="4" required>
              <label for="fivestar"></label>
              <input type="radio" id="fivestar" name="stars" value="5" required>
            </div>  
            <button type="submit">Submit</button>
          </form>
        `;
      
    renderReviews(filmId);
    setReviewValues(filmId);
    }
}

// This creates the format of the user review in local storage. It saves the name 
// of the user as anonymous, sets the movie title to the movie the user is reviewing,
// the user's rating, and so on.
function setReviewValues(filmId) {
    document.getElementById("review-form").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const reviewInput = document.getElementById("review-input");
        const userRating = document.querySelector("input[name='stars']:checked"); 
    
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
        const userReviews = document.createElement("div");
    
        // Generate the star rating with stars
        const rating = review.rating;
        const fullStars = Math.floor(rating);  
        const emptyStars = 5 - fullStars 
    
        // Create the star rating display
        const stars = "★".repeat(fullStars) + "☆".repeat(emptyStars);
    
        userReviews.innerHTML = `
          <div>
            <strong>${review.movie}</strong>
            <p>${review.user}</p>
            <p>${review.text}</p>
            <p class="star-rating">${stars}</p>
          </div>
        `;
        
        reviewList.appendChild(userReviews);
      });
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