// Error handling, "try...catch"

// “try…catch” syntax

// Below is the syntax for "try...catch"

// try {

//     My code goes here.
  
//   } catch (err) {
  
//     All error handling in here.
  
//   }

// catch (err) is ignored when try does not find any errors.
// If try finds an error, the rest of try is ignored and the
// code executes the catch block.



function displayRino() {
// The try catch is within this function because it is using setTimeout.
// Using try and catch outside of a function that uses code that schedules 
// events will not work.
    try {

      const randomRino = document.querySelector('.no-error-rino');
      const randomRinoContainer = document.querySelector('.image-container')

      randomRino.style.display = 'block';
      randomRinoContainer.style.margin = '50px';

    } catch (err) {

      alert('This catch is ignored because there are no errors');

    }
}

setTimeout(displayRino, 5000);

// Here is code that does not ignore catch, because an error has been found.
  
printNumbers(10, 0);

function errorDisplayRino() {
    try {

      errorRino;

    } catch (err) {

        alert(`Error has occurred!`);

    }
}

// This code creates the countdown to the error message on the webpage. It's from the previous lesson.

setTimeout(errorDisplayRino, 11000);

function printNumbers(from, to) {
    const mynumbers = document.querySelector('.error-Countdown');
    let currentNumber = from;
  
    let numberTimer = setInterval(function() {
      mynumbers.textContent = 'An error message will appear in: ' + currentNumber;
      if (currentNumber == to) {
        clearInterval(numberTimer);
      }
      currentNumber--;
    }, 1000);
}

//_______________________________________________________________________________________________________

// Error object

// name: is a "ReferenceErro". Error name, for undefined variables.

// message: A text based message that tells you about the error details.

// stack: a string of information that tells you about the nested calls that led to the error.
// It works well for debugging purposes.

// example

const errName = document.querySelector(".err-name");
const errMessage = document.querySelector(".err-message");
const errStack = document.querySelector(".err-stack");
const errString = document.querySelector(".errString");

try {
  joanna; // error, variable is not defined!
} catch (err) {
  errName.textContent = `This is the error message that shows when using the error object name: ${err.name}`; // ReferenceError
  errMessage.textContent = `This error message shows when using the error object message: ${err.message}`; // joanna is not defined
  errStack.textContent = `This error message shows when using the error object stack: ${err.stack}`; // ReferenceError: joanna is not defined at (...call stack)

  // The error is converted to string as "name: message"
  errString.textContent = `This error message shows when it is converted to a string: ${err}`; // ReferenceError: joanna is not defined
}

// syntax

// try {

//   code here

// } catch (err) {
//   alert(err.name); 
//   alert(err.message); 
//   alert(err.stack); 
//   alert(err); 
// }

// You don't have to use (err) if you don't want error details.

//_______________________________________________________________________________________________________

//receive and call it using JSON.parse

// Below is an example of how you can change the alerts to show my name or anything you want using
// JSON.parse.

const myFirstName = document.querySelector('.my-first-name');
const myLastName = document.querySelector('.my-last-name');

let json = '{"fname":"Joanna", "lname":"Gohnert"}';

try {

  let myName = JSON.parse(json);

  myFirstName.textContent = `This error message shows my first name on the json string: ${myName.fname}`;
  myLastName.textContent = `This error message shows my last name on the json string: ${myName.lname}`;

} catch (err) {
  alert('This alert won\'t happen because There is no error in this section of code.');
}

//_______________________________________________________________________________________________________

// “Throw” operator

// the throw operator generates an error 

// syntax

// throw <error object>

// you can use anything as an error object, but it's better to use objects like
// name, meassage, 

// JS built in errors are: Error, SyntaxError, ReferenceError, TypeError, and more.

// syntax

// let error = new Error(message);
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);

// in the code below, catch is a place for all error handling because "throw" is used to 
// handle name because name is not in the  json2 data.

const errorMiddleName = document.querySelector(".error-middle-name");

let json2 = '{ "mname":"Louise" }'; // incomplete data

try {

  let myMName = JSON.parse(json2); // no errors

  if (!myMName.name) {
    throw new SyntaxError("Incomplete data: no middle name");
  }

  alert(myMName.name)

} catch (err) {
  errorMiddleName.textContent = `JSON Error: ` + err.message; // JSON Error: Incomplete data: no middle name
}

//_______________________________________________________________________________________________________

// Rethrowing

// In cases where catch gets an unexpected error, but still shows the same "JSON Error", like in the code
// above, use the rethrowing technique.

// Catch should only process errors that it knows, rethrow all the others.

// If you don't know how to handle certain errors, use thow err.

// You can check the error type by using instanceof operator

// example:

// } catch (err) {
//   if (err instanceof ReferenceError) {
//     alert('ReferenceError'); // "ReferenceError"
//   }
// }

//_______________________________________________________________________________________________________

// try…catch…finally

// finally finalizes code in any case of outcome, whether there is an error or not.

// Syntax 

// try {
//   try to execute the code here
// } catch (err) {
//   handle errors here
// } finally {
//   execute always here
// }

