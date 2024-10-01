// The AudioContext() is the Web Audio API. This allows you to do
// Any type of audio manipulation.
const audioCtx = new AudioContext();

const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);


// play/pause audio
playBtn.addEventListener("click", () => {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    //The play() and pause() are part of the HTMLMediaElement API
  
    // if track is stopped, play it
    if (playBtn.getAttribute("class") === "paused") {
      audioElement.play();
      playBtn.setAttribute("class", "playing");
      playBtn.textContent = "Pause";
      // if track is playing, stop it
    } else if (playBtn.getAttribute("class") === "playing") {
      audioElement.pause();
      playBtn.setAttribute("class", "paused");
      playBtn.textContent = "Play";
    }
  });
  
  // if track ends
  audioElement.addEventListener("ended", () => {
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  });
  
// The AudioContext.createGain() is used to adjust the volume.
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});

// The AudioContext.destination represents the default AudioDestinationNode
// on your computer, such as your speakers. 

audioSource.connect(gainNode).connect(audioCtx.destination);

//_____________________________________________________________________________________

// The 'document' object is the Document Object Model (DOM) API. This API allows you
// to manipulate the document in any way.

const myText = document.createElement('div')

myText.className = 'message'
myText.textContent = 'This is a text inserted into the document using the DOM API.'
myText.style.background = '#4a375f';
myText.style.color = 'white';

document.body.before(myText);

//_____________________________________________________________________________________

// You get 'canvas' as a reference to what you want to draw on.
// The you use HTMLCanvasElement.getContext() method as a way to use the Canvas API

const canvasHtml = document.querySelector("canvas");

const drawHtml = canvasHtml.getContext("2d");

drawHtml.beginPath();
drawHtml.moveTo(20, 50);
drawHtml.lineTo(20, 100);
drawHtml.lineTo(270, 100);
drawHtml.lineTo(270, 50);
drawHtml.lineTo(20, 50);
drawHtml.stroke();
