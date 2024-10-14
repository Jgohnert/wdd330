// Fetch

// Fetch is a modern way of sending network requests to get server information.
// Old browsers do not support fetch().

// Here is the basic syntax:

// let promise = fetch(url, [options])

// url – the URL to access.
// options – optional parameters: method, headers etc.

// If you don't use options it is just a GET request that downloads the contents of the url.

// When cheking the HTTP request, there will be errors if there are network problems, or if
// the site doesn't exist.

// Here is an example of how you can check if the HTTP-status is between 200-299:

// let response = await fetch(url);

// if (response.ok) {
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }

// Here are the response promise-based methods to access the body in various formats:

// response.text() – read the response and return as text,
// response.json() – parse the response as JSON,
// response.formData() – return the response as FormData object,
// response.blob() – return the response as Blob (binary data with type),
// response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
// additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk.

async function fetchTest() {
    let url = 'https://github.com/Jgohnert/wdd330/data/myfamily.json';
    let response = await fetch(url);

    let myFamily = await response.json(); // read response body and parse as JSON

    alert(myFamily.eachFamilyMember.name[0]);
}

fetchTest()

