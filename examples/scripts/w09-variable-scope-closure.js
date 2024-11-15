let div1 = document.querySelector(".div-1");

// Lexical Environment

// Variables

// By declaring message first, you can set it equal to anything and change it without 
// any errors. In the code below, the changed message will show up on the HTML without 
// issues.
let message;

message = "This string is inside the \"message\" variable.";

message = "This is the changed message in the variable.";

div1.textContent = message;

// If the code above looks like this: 

// let message2 = "This is my message";
// let message2 = "This is my other message";

// You will get an error

//________________________________________________________________________________________

// Step 2. Inner and outer Lexical Environment

// A new Lexical Environment is created when the function runs. 
// When the function is called, it has two  Lexical Environments.
// The inner one: for the function call. It corresponds to the execution of favoriteFruit.
// It has one property: fruit. The value of fruit is "apple"
// The outer one: global. Is has the message2 variable and the function.

let message2 = "I like";

function favoriteFruit(fruit) {
    let div2 = document.querySelector(".div-2");
    div2.textContent = (`${message2} ${fruit}`);
}

favoriteFruit("apples");

//________________________________________________________________________________________

// Returning a function

// When we call a function multiple times using counter, the number will count up.
// A closure is a function that can access its outer variables and remembers it.

let count0 = document.querySelector(".count-0");
let count1 = document.querySelector(".count-1");
let count2 = document.querySelector(".count-2");
let count3 = document.querySelector(".count-3");

function numberCounter() {
    let number = 0;
  
    return function() {
      return number++;
    };
}
  
let counter = numberCounter();

count0.textContent = counter();
count1.textContent = counter();
count2.textContent = counter();
count3.textContent = counter();

//________________________________________________________________________________________

// Here is how you can call a random picture of a wolf when calling a function 3 times,
let div4 = document.querySelector(".div-4");

function f() {
    let randomImage = `<img src="https://loremflickr.com/300/200/wolf?random=${Math.random()}" alt="Image of a wolf" width="300" height="200">`;
  
    return function() { 
        div4.innerHTML += randomImage; 
    };
}

let arr = [f(), f(), f()];

arr[0]();
arr[1]();
arr[2]();

// You can also call this function doing it the way it's shown below, but the images will
// not be random. You will get the same wolf picture 3 times.

// let arr = f();

// arr();
// arr();
// arr();