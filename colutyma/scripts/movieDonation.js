import { findMovieBy } from "./getdata.js";

const movieOrder = document.querySelector("#movie-order");

const shippingCost = null

// Gets the movie title from the url on the donation page and 
// puts it into the movieDonationTemplate function and displays it.
export async function getMovieDetails() {

    // Gets the movie title from the URL
    const urlTitle = new URLSearchParams(window.location.search);
    const movieTitleId = urlTitle.get("title");

    const movie = await findMovieBy(movieTitleId);

    if (movie) {
        // This displays the movie the user wants if it has been selected.
        movieDonationTemplate(movie);
        AddressFieldset();
    } else {
        // This hides the address fieldset if the user does not want 
        // a movie shipped to them when they give a donation.
        totalCost(shippingCost)
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
function AddressFieldset() {
    const addressFieldset = document.querySelector("#address-fieldset");
    const shippingCostHtml = document.querySelector("#shipping-cost");
    const shippingCost = 2

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

        if ( shippingCost !== null ) {
            const totalPlusShipping = (userDonation + shippingCost).toFixed(2);

            orderTotal.innerHTML = `$${totalPlusShipping}`;

            donateSubmit.style.display = "block";

        } else {
            orderTotal.innerHTML = `$${userDonation}`;

            donateSubmit.style.display = "block";
        }

    });

}
