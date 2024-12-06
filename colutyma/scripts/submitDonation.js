import { getLocalStorage, setLocalStorage} from "./getdata.js";

function saveShippingDetails(filmId, shippingDetails, total) {
    const shippingInfo = {
        movieTitle: filmId,
        shipping: shippingDetails,
        total: total
    };

    const savedShippingInfo = getLocalStorage("shipping-info") || {};
    if (!savedShippingInfo[filmId]) {
        savedShippingInfo[filmId] = [];
    }
    savedShippingInfo[filmId].push(shippingInfo);
    setLocalStorage("shipping-info", savedShippingInfo);
}

function saveDonationDetails(userDonation, userDetails) {
    const donationInfo = {
        userInfo: userDetails,
        donation: userDonation
    };

    const savedDonationInfo = getLocalStorage("donation-info") || [];
    savedDonationInfo.push(donationInfo);
    setLocalStorage("donation-info", savedDonationInfo);
}

export function submitShippingDetails(movie, shippingAmount) {
    const movieForm = document.querySelector("#movie-form");

    movieForm.addEventListener("submit", () => {

        console.log('Submit button clicked');

        const movieTitle = movie.title;
        const userDonation = parseFloat(document.querySelector("[name='donation']").value);
        const shippingCost = shippingAmount;
        const totalCost = (userDonation + shippingCost).toFixed(2);
        
        // Get shipping details from form
        const shippingDetails = {
            firstName: document.querySelector("[name='fname']").value,
            lastName: document.querySelector("[name='lname']").value,
            street: document.querySelector("[name='street']").value,
            city: document.querySelector("[name='city']").value,
            state: document.querySelector("[name='state']").value,
            zip: document.querySelector("[name='zip']").value
        }

        // Save shipping and cost information to localStorage
        saveShippingDetails(movieTitle, shippingDetails, totalCost);
        
        alert("Shipping and cost information saved successfully!");

        // You could also trigger donation details here if needed
        submitDonationDetails(); 
    });
}

export function submitDonationDetails() {
    const movieForm = document.querySelector("#movie-form");

    // Same form submit listener
    movieForm.addEventListener("submit", () => {

        console.log('Submit button clicked for donation');

        const userDonation = parseFloat(document.querySelector("[name='donation']").value);

        const userDetails = {
            firstName: document.querySelector("[name='fname']").value,
            lastName: document.querySelector("[name='lname']").value,
        }

        // Save the user donation to localStorage
        saveDonationDetails(userDonation, userDetails);
        
        alert("Donation has been saved successfully!");
    });
}
