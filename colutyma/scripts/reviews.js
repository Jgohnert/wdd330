import { getLocalStorage, setLocalStorage} from "./getdata.js";
// import { displayFeaturedReviews } from "./randomReviews.js"

function renderReviewSection(filmId) {
    const reviewSection = document.getElementById("user-reviews");
  
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

function setReviewValues(filmId) {
    document.getElementById("review-form").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const reviewInput = document.getElementById("review-input");
        const userRating = document.querySelector("input[name='stars']:checked"); 
    
        const newReview = reviewInput.value.trim();

        // Get the rating value as an integer
        const rating = parseInt(userRating.value);  
        const userName = "Anonymous";
         
        // Save the Reviews with the rating
        saveReview(filmId, { user: userName, text: newReview, rating: rating });

        renderReviews(filmId);
         
        // Clear the Reviews input field
        reviewInput.value = "";
    });
}

// This renders the 3 random featured reviews on the main page
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
            <strong>${review.user}</strong>
            <p>${review.text}</p>
            <p class="star-rating">${stars}</p>
          </div>
        `;
        
        reviewList.appendChild(userReviews);
      });
}

// This renders the all of the featured reviews on the movie info page
export function renderReviews(filmId) {
  const reviews = getReviews(filmId);

  renderRandomReviews(reviews)

}

export function getReviews(filmId) {
    const reviews = getLocalStorage("reviews") || {};
    return reviews[filmId] || [];
}
  
export function saveReview(filmId, review) {
    const reviews = getLocalStorage("reviews") || {};
    if (!reviews[filmId]) {
        reviews[filmId] = [];
    }
    reviews[filmId].push(review);
    setLocalStorage("reviews", reviews);
}

renderReviewSection();