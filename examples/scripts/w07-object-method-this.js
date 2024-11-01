// Object methods, "this"

// Objects normally reprisent real world entities like users, and orders.

// A user can do things such as adding items to their shopping cart, and login.

// In the example below:

let user = {
    name: "Joanna",
    color: "Navy blue",
    dessert: "Chocolate chip cookies"
};

// Notice you can access the information you want using user.name or this.color.
// You can use "this" method to access the object.
  
user.aboutMe = function() {
    let myInfo = document.querySelector(".my-message");
    myInfo.textContent = `My name is: ${user.name}. My favorite color is: ${this.color}`
};
  
user.aboutMe();

// The function is assigned to user.aboutMe of the object.
// You can call it by using user.aboutMe().

// Its method is a function that is the property of an object.

// aboutMe is the method. object is user.

// You can also declare the function first as a method.
// Example:

function favoriteDessert() {
    let myFavoriteDessert = document.querySelector(".my-favorite-dessert");
    myFavoriteDessert.textContent = `My favorite dessert is: ${this.dessert}` // The value of "this" is "user"
};
  
user.favoriteDessert = favoriteDessert;

user.favoriteDessert();

// Here's two shorthand examples that do the same thing:

// user = {
//     sayHi: function() {
//       alert("Hello");
//     }
// };

// Shorter syntax:

// user = {
//     sayHi() {
//      alert("Hello");
//     }
// };

// The shorter syntax is prefered.

// using "this" over "user" is better in case you decide to 
// use "user" as another varibale. If "user" is made copied as
// another variable and we're trying to use "user" to access 
// information, you'll get an error.

// Here is how you can use "this" to access the same names depending on the context:

const myBirthday = document.querySelector(".my-birthday");
const mySiblingBirthday = document.querySelector(".my-sibling-birthday")

let Birthday = {
    month: "09",
    day: "25",
    familyBirthdays
}

let siblingBirhday = {
    month: "08",
    day: "12",
    familyBirthdays
}

function familyBirthdays() {
    return `My birthday is: ${this.month}/${this.day}`;
}

myBirthday.textContent = Birthday.familyBirthdays();
mySiblingBirthday.textContent = siblingBirhday.familyBirthdays();
