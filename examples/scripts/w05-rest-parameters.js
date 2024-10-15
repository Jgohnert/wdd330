// Rest parameters

// Functions can have any number of arguments.
// Here is an example:

const firstNumbers = document.querySelector(".first-numbers")
const argumentText = document.querySelector(".argument-text")

// only four is used.
function sum(a, b, c, d) {
    return a + b + c - d;
}
// The last four are not used.
firstNumbers.textContent = sum(1, 2, 3, 4, 5, 6, 7, 8);


// If you want to use all of the arguments, use the three dots ...
// It will add all the arguments together.

const sumAllNumbers = document.querySelector(".sum-all-numbers")

function sumAll(...numbers) {
    let sum = 0;
  
    for (let number of numbers) sum += number;
  
    return sum;
}

// Here is another example of using a rest parameter (...).
// If you have another argument that isn't a rest parameter, than the
// rest parameter has to be at the end. Example: (arg, arg1, ...rest)
  
sumAllNumbers.textContent = sumAll(1, 2, 3, 4, 5, 6, 7, 8);


const foodList = document.querySelector(".food-list")

function FavoriteFoods(...food) {
    foodList.textContent = `${food[0]}, ${food[1]}, ${food[2]}`;
}

FavoriteFoods("pizza", "cheeseburger", "chicken");

//_________________________________________________________________________________

// The “arguments” variable
// You can also use an arraay-like object called arguments.
// Below is an example:

const argumentList = document.querySelector('.argument-list')

function bestColors() {
    argumentList.textContent = `${arguments[0]}, ${arguments[1]}, ${arguments[2]}`;
}

bestColors("Green", "Blue", "Red");

// Remember that arguments is not an array, so you can't use array methods on it.
// Because of this, rest parameters are prefered.

//_________________________________________________________________________________

// Spread syntax

// Using Math.max, you can find the biggest number in the list, which is 9.

const mathMax = document.querySelector(".math-max")
const usingSpreadSyntax = document.querySelector(".using-spread-syntax")

function spreadSyntaxExample() {
    mathMax.textContent = Math.max(6, 3, 9, 4, 8, 1, 5, 2, 7)

// Math.max only expects a list of numbers as arguments, not an array,
// unless you use Spread syntax.
// Example:

    let numericList = [6, 3, 9, 4, 8, 1, 5, 2, 7];
    usingSpreadSyntax.textContent = Math.max(...numericList);

// The spread syntax uses the similar three dots (...), as we used in 
// the FavoriteFoods() function.

}

spreadSyntaxExample();

