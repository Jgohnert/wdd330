// The Javascript code below is by Steve Griffith.
// The link to this code on his github is found here: https://gist.github.com/prof3ssorSt3v3/7be8dd12f4d022932a3f700e0cef1841
// Most comments and the HTML code is mine.

// Always add an name attribute to the inputs located on the HTML.

document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("myForm")
      .addEventListener("submit", handleForm); //This is the submit listener for my form.
      // handleForm is always called when the submit button is clicked.
});

function handleForm(event) {
    // preventDefault needs to be added to the event to prevent the page from reloading.
    // This will prevent the form from getting a new page to replace the current page.
    // You want to get the data without losing the data the user typed.
    event.preventDefault(); 

    // event.target is the form.
    let myForm = event.target;

    // This creates a new data form object. You pass in the form object (myForm).
    // The fd holds all the imputs the user typed in on the form.
    // It's the body you can send to the server.
    let fd = new FormData(myForm);

    // api-key with myApiKey as a string is created and appended to fd so we can add it to our form.
    // This is a way you can add something to a form that isn't in it.
    fd.append('api-key', 'myApiKey');

    // This looks at all the contents.
    // The method keys on the form data object 'fd.keys', creates an iterator. It allows you to 
    // iterate/loop through all the values. a for of loop lets you do this.
    // 'key' is the name of the form elements, same as 'api-key' above.
    // pass in a key in fd.get(key) so it can get you the value.
    // This is all being sent in the body.'body: fd'
    for (let key of fd.keys()) {
      console.log(key, fd.get(key));
    }

    // uncomment this to change the fd into json object.
    // let json = convertFD2JSON(fd);

    // Sends the request with the formdata
    let url = 'http://localhost:3000/';
    let h = new Headers();
    h.append('Content-type', 'application/json');

    // The 'Request' object is set to the 'url'.
    let req = new Request(url, {
      // Body is fd. fd is our form data object.
      body: fd,
      // uncomment this to change the fd into json object.
      // headers: h,
      // body: json,
      method: 'POST',
    });

    // This fetch is sent to the http://localhost:3000/ URL above.
    // This sends it all to the server.
    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        console.log('Response from server');
        console.log(data);
      })
      .catch(console.warn);
  }

  function convertFD2JSON(formData) {
    // create an object.
    let obj = {};
    for (let key of formData.keys()) {
      // Grab the object to creat a property on the object, 'key'.
      // and set it's value to 'formData.get(key)'.
      obj[key] = formData.get(key);
    }
    // return the object.
    return obj;
    // uncomment this to change the fd into json object.
    // return JSON.stringify(obj);
  }