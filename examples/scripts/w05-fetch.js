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

async function responseJson() {

    let familyMembers = document.querySelector('.family-members');

    let url = 'https://jgohnert.github.io/wdd330/examples/data/myfamily.json';
    let response = await fetch(url);

    let myFamily = await response.json(); // read response body and parse as JSON

    familyMembers.textContent = 
    `${myFamily.eachFamilyMember[0].name}, 
    ${myFamily.eachFamilyMember[1].name},
    ${myFamily.eachFamilyMember[2].name},
    ${myFamily.eachFamilyMember[4].name},
    ${myFamily.eachFamilyMember[5].name}`;
}

responseJson()

// Here is how you can do the same thing without using await:

// fetch('https://jgohnert.github.io/wdd330/examples/data/myfamily.json')
//   .then(response => response.json())
//   .then(myFamily => familyMembers.textContent = `${myFamily.eachFamilyMember[0].name}`);

// You can also display the json file as text on the html using response.text().

async function responseText() {
    let jsonAsText = document.querySelector('.json-text')
    let response = await fetch('https://jgohnert.github.io/wdd330/examples/data/myfamily.json');

    let text = await response.text(); // read response body as text

    jsonAsText.textContent = text.slice(0, 200) + '...';
}

responseText()

//_______________________________________________________________________________________________________

// Response headers

// This is how you can display the headers by name or iterate over them:

async function responseHeaders() {
    let responseHeader = document.querySelector('.response-header');
    let responseHeaders = document.querySelector('.response-headers');
    let response = await fetch('https://jgohnert.github.io/wdd330/examples/data/myfamily.json');

// Here's how you get one header
    responseHeader.textContent = response.headers.get('Content-Type');

    let headers = ''

// Here's how you iterate over all headers
    for (let [key, value] of response.headers) {
        headers += `${key} = ${value} |`;
    }

    responseHeaders.textContent = headers;
}

responseHeaders()