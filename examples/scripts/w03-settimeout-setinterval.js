// setTimeout and setInterval

// When you want to schedule a time for a function to execute, 
// you use setTimeout and setInterval.

// setTimeout - used to execute a function once after the interval of time.
// setInterval - repeats a function continuously after the interval of time.

// Here is an example of the setTimeout sintax:
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

// The 'func|code' is the function or string of code you want to execute. a string
// of code is not recommended.
// The 'delay' is the delay before the run in milliseconds, default at 0. (1000 ms = 1 second).
// 'arg1, arg2…' are arguments for the function.

// example:


function myMessage() {
    const myText = document.querySelector('.message');

    myText.textContent = 'This text is called after two seconds. It\'s to demonstarte the use of setTimeout.';
}

setTimeout(myMessage, 2000);

// Here is an example with arguments:

function mySecondMessage(greeting, myName) {
    const myOtherText = document.querySelector('.message2');

    myOtherText.textContent = greeting + 'my name is ' + myName + 'This text is called after five second. It\'s to demonstarte the use of setTimeout using two arguments, which are the greeting and my name.';
}

setTimeout(mySecondMessage, 5000, 'Hi ', 'Joanna Gohnert. ');

// Remember to not add brackets () after the function.\

//___________________________________________________________________________

// clearTimeout

// You can use clearTimeout to cancel the execution.
// Here is the syntax:

// let timerId = setTimeout(...);
// clearTimeout(timerId);

//___________________________________________________________________________

// setInterval

// setInterval has the same syntax as setTimeout
// Example:

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// setInterval runs regularly after the interval time.
// Example:


const myIntervalText = document.querySelector('.set-interval-message');

let myTimerId = setInterval(() => myIntervalText.textContent = 'This message will repeat every eight seconds for twenty seconds.', 8000);

setTimeout(() => {clearInterval(myTimerId); myIntervalText.textContent = 'Finished showing message for twenty seconds.'; }, 20000);

//___________________________________________________________________________

// Nested setTimeout

// Here is another way to run something regularly:

let AnotherTimerId = setTimeout(function intervalMessage() {
    const myIntervalText2 = document.querySelector('.set-interval-message2');
    myIntervalText2.textContent = 'This message is another repeated message that will continuously repeat.';
    AnotherTimerId = setTimeout(intervalMessage, 2000); 
}, 10000);

//___________________________________________________________________________

// Here is an example of how to use setInterval to count up to 100 on the html document.

function printNumbers(from, to) {
    const mynumbers = document.querySelector('.numbers');
    let currentNumber = from;
  
    let numberTimer = setInterval(function() {
      mynumbers.textContent = 'Using setIntervals to count from 1 to 100: ' + currentNumber;
      if (currentNumber == to) {
        clearInterval(numberTimer);
      }
      currentNumber++;
    }, 1000);
}
  
printNumbers(1, 100);