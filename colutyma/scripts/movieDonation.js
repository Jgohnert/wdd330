import { findMovieBy } from "./getdata.js";
import { submitShippingDetails, submitDonationDetails } from "./submitDonation.js";

const movieOrder = document.querySelector("#movie-order");

// Gets the movie title from the url on the donation page and 
// puts it into the movieDonationTemplate function and displays it.
export async function getMovieDetails() {

    // Gets the movie title from the URL
    const urlTitle = new URLSearchParams(window.location.search);
    const movieTitleId = urlTitle.get("title");

    const movie = await findMovieBy(movieTitleId);

    if (movie) {
        // This displays the movie and the shipping cost if the user selected a film to recieve.
        const shippingCost = 2

        movieDonationTemplate(movie);
        AddressFieldset(shippingCost);
        submitShippingDetails(movie, shippingCost);
    } else {
        // This hides the address fieldset if the user does not want 
        // a movie shipped to them when they give a donation.
        // It also handles the submit details if a movie has not been selected to be shipped.
        const shippingCost = 0

        totalCost(shippingCost);
        submitDonationDetails();
    }
}

// The template that displays the movie the user wants shipped 
// to them on the donation page.
function movieDonationTemplate(movie) {
    let template = `
        <p>${movie.title}</p>
        <img src="${movie.poster}" alt="${movie.title}">
    `;
    movieOrder.innerHTML = template;
}

getMovieDetails();

// The template form for the address fieldset. It also displays the 
// shipping cost amount.
function AddressFieldset(shippingCost) {
    const addressFieldset = document.querySelector("#address-fieldset");
    const shippingCostHtml = document.querySelector("#shipping-cost");

    let addressTemplate = `
        <fieldset>
          <legend>Shipping Address</legend>
          <div class="shipping_address">
            <label for="street">Street</label>
            <input name="street" required/>
            <label for="city">City</label>
            <input name="city" required/>
            <label for="state">State</label>
            <input name="state" required/>
            <label for="zip">Zip</label>
            <input name="zip" type="number" id="zip" required/>
          </div>
        </fieldset>
    `
    addressFieldset.innerHTML = addressTemplate;

    const shippingCostText = `
        Shipping Cost: ${shippingCost}
    `;

    shippingCostHtml.innerHTML = shippingCostText;

    totalCost(shippingCost);

}

// Calculates the final cost and handles if there is a shipping cost or not.
function totalCost(shippingCost) {

    const amountButton = document.querySelector("#amount-button");

    amountButton.addEventListener("click", () => {
        const userDonation = parseFloat(document.querySelector("#donation").value);
        const orderTotal = document.querySelector("#order-total");
        const donateSubmit = document.querySelector("#donate-submit");


            const totalPlusShipping = (userDonation + shippingCost).toFixed(2);

            orderTotal.innerHTML = `$${totalPlusShipping}`;

            donateSubmit.style.display = "block";

    });

}
