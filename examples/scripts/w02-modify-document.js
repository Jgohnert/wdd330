// These are the two ways to create DOM nodes.

// let div = document.createElement('div');
// let textNode = document.createTextNode('Write text here');

// Creating a message div:

// 1. Create <div> element
let div = document.createElement('div');

// 2. Set its class to "alert"
div.className = 'message';

// 3. Fill it with the content
div.innerHTML = 'This is how you modify the DOM using element nodes.';

// To make the div show up, we need to insert it somewhere into document.
document.body.append(div);

// node.append(...nodes or strings) – append nodes or strings at the end of node,
// node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
// node.before(...nodes or strings) –- insert nodes or strings before node,
// node.after(...nodes or strings) –- insert nodes or strings after node,
// node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.

//Example:

list.before('This text is above the list because we insterted the string "before" the ol. ');
list.after('This text is below the list because we insterted the string "after" the ol.'); 

let First = document.createElement('li');
First.innerHTML = '"prepend" insters string at the beginning of the node.';
list.prepend(First); // insert liFirst at the beginning of <ol>

let Last = document.createElement('li');
Last.innerHTML = '"append" insters string at the end of the node.';
list.append(Last); // insert liLast at the end of <ol>

//____________________________________________________________________

// insertAdjacentHTML/Text/Element

// element.insertAdjacentHTML(where, html)
// element.insertAdjacentText(where, text)
// element.insertAdjacentElement(where, elem)

// "beforebegin" – insert html before element,
// "afterbegin" – insert html into beginning of the element,
// "beforeend" – insert html into end of the element,
// "afterend" – insert html after element.

// Example:

element.insertAdjacentHTML('beforebegin', '<p>"beforebegin" inserts html before the element.</p>');
element.insertAdjacentHTML('afterend', '<p>"afterend" inserts html after the element.</p>');

// The insertAdjacentText works the same as the insertAdjacentHTML, 
// accept it inserts as text instead of html.
// The insertAdjacentElement is also the same, but insters an element
// insertAdjacentHTML is used most of the time.

document.body.insertAdjacentHTML('beforeend', `<div class="message">
    This is another example of modifying the DOM using "insertAdjacentHTML".
    Using "beforeend" inserts this text at the end of the element.
    </div>`);

//____________________________________________________________________

// Node removal

// Example:

let vanishDiv = document.createElement('div');

vanishDiv.className = 'vanish';

vanishDiv.innerHTML = 'This message will vanish in 5 seconds.';

document.body.append(vanishDiv);
setTimeout(() => vanishDiv.remove(), 5000);

//____________________________________________________________________

// Cloning nodes: cloneNode

// Example:

let div2 = element.cloneNode(true); // clone the message
div2.querySelector('strong').innerHTML = 'This message has been cloned.';

element.after(div2); // show the clone after the existing div

//____________________________________________________________________

// DocumentFragment