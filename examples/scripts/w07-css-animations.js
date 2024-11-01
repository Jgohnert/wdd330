const colorChange = document.querySelector(".color-change");
const mynumbers = document.querySelector('.count-down');

function countDown(from, to) {
    let currentNumber = from;
  
    let numberTimer = setInterval(function() {
      mynumbers.textContent = 'Background color will change in: ' + currentNumber;
      if (currentNumber == to) {
        clearInterval(numberTimer);
      }
      currentNumber--;
    }, 1000);
}
  
countDown(10, 0);

// The background will change once the countdown goes to zero. The CSS is changing the
// transition-duration of the background.

backgroundChange = function() {
    this.style.backgroundColor = "rgb(0, 73, 0)";
    this.style.color = "white";
};

setTimeout(backgroundChange.bind(colorChange), 11000);

// "This" is accessing the birdButton, changing it's color to grey 
// when clicked. birdImage and birdDiv are being accessed directly.

const birdButton = document.querySelector("#bird-button");
const birdImage = document.querySelector("#bird-image");
const birdDiv = document.querySelector(".bird-div");

birdButton.onclick = function() {
  this.style.display = "inline";
  this.style.backgroundColor = "grey";

  birdImage.style.display = "inline";
  birdDiv.style.backgroundColor = "rgb(0, 73, 0)";
  birdDiv.style.color = "white";
};


// There are 4 properties to describe CSS transitions:

// transition-property
// transition-duration
// transition-timing-function
// transition-delay

const movingMessage = document.querySelector("#moving-message");

movingMessage.onclick = function() {
  movingMessage.classList.add("animate");
};