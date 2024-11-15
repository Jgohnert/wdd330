const myCanvas = document.querySelector(".my-canvas");

// This makes the canvas span the entire window of the browser.
// use window.innerHeight or window.innerWidth instead of "800" "400" to fill the window.
const width = (myCanvas.width = "800");
const height = (myCanvas.height = "400"); 

// This makes our canvas 2d
const ctx = myCanvas.getContext("2d");

// Bellow is what changes the color of the canvas.
ctx.fillStyle = "rgb(186 228 210)";
ctx.fillRect(0, 0, width, height);

// The top left of the canvas is point (0, 0).

// This is the bright green square
ctx.fillStyle = "rgb(0 255 0)";
//            1    2   3    4
ctx.fillRect(100, 200, 200, 150);
// 1: Move left or right from left corner
// 2: Move up or down from left corner
// 3: How many pixels wide
// 4: How many pixals tall

// This is the yellow square.
// The 75% makes the yellow square transparent
ctx.fillStyle = "rgb(220 255 100 / 75%)";
ctx.fillRect(260, 140, 100, 100);


// Strokes and line widths

// This is how you create a line
ctx.strokeStyle = "rgb(155 0 255)";
// Choose how thick you want the line
ctx.lineWidth = 15;
ctx.strokeRect(200, 20, 305, 300);


// Drawing paths

// This is the blue line
ctx.beginPath(); // This starts drawing a path where the pen is at on the canvas
ctx.strokeStyle = "rgb(55 100 255)";
ctx.lineWidth = 5;
ctx.moveTo(100, 100); // The pen jumps to a new position
ctx.lineTo(700, 200); // draw your path
ctx.stroke(); // This fills in the path you traced


// Drawing lines

// This is a helper function to converts degree values to radians.
function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

// This is how you make a triangle
ctx.fillStyle = "rgb(255 100 100 / 75%)";
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(250, 150);
const triHeight = 60 * Math.tan(degToRad(60));
ctx.lineTo(100, 150 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();


// Drawing circles

ctx.fillStyle = "rgb(50 200 155)";
ctx.beginPath();
//       1    2    3                            false is clockwise
ctx.arc(650, 106, 70, degToRad(0), degToRad(360), false);
// 1: Move circle left or right
// 2: Move circle up or down
// 3: How big you want the circle to be
ctx.fill();


// Text

// This is how you draw text
ctx.strokeStyle = "rgb(250 100 55)";
ctx.lineWidth = 2;
ctx.font = "36px helvetica";
ctx.strokeText("This text is shown using .strokeText", 100, 380);


myCanvas.setAttribute("aria-label", "Canvas text");


// Drawing images onto canvas

const imageOfMacaque = new Image();
imageOfMacaque.src = "images/macaque-8256950_640.jpg";
//                                                                           1    2    3    4    5    6    7    8
imageOfMacaque.addEventListener("load", () => ctx.drawImage(imageOfMacaque, 400, 100, 285, 175, 550, 170, 285, 175));
// 1: Moves the image within the image container left or right, Keeping the rest hidden.
// 2: Moves the image within the image container up or down, Keeping the rest hidden.
// 3 and 4: Defines the width and height you want to cut out
// 5: Moves image on canvas left or right
// 6: Moves image on canvas up or down
// 7 and 8: make the image wider or taller


const colorPicker = document.querySelector("input[type='color']");
const sizePicker = document.querySelector("input[type='range']");
const output = document.querySelector(".output");
const clearBtn = document.querySelector("button");

// covert degrees to radians
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

// update sizepicker output value

sizePicker.addEventListener("input", () => output.textContent = sizePicker.value);

// store mouse pointer coordinates, and whether the button is pressed
let curX;
let curY;
let pressed = false;

// update mouse pointer coordinates
document.addEventListener("mousemove", e => {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
});

myCanvas.addEventListener("mousedown", () => pressed = true);

myCanvas.addEventListener("mouseup", () => pressed = false);

clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(186 228 210)";
  ctx.fillRect(0,0,width,height);
});

function draw() {
    if (pressed) {
      ctx.fillStyle = colorPicker.value;
      ctx.beginPath();
      ctx.arc(
        curX - 40,
        curY - 215,
        sizePicker.value,
        degToRad(0),
        degToRad(360),
        false,
      );
      ctx.fill();
    }
  
    requestAnimationFrame(draw);
}
  
draw();