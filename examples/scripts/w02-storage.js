// LocalStorage, sessionStorage

// You can use LocalStorage and sessionStorage to save key and value
// pairs in the browser.

// sessionStorage will survive when the page refreshes.
// The data won't expire. It stays after the browser 
// restart and OS reboot.

// localStorage will survive up to a full browser restart, and
// it is shared with all tabs and windows from the same origin.

// methods and properties:

// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.

// example:

localStorage.setItem('text', 'This text is in local storage');

let message = document.createElement('div');

message.className = 'message';

message.innerHTML = localStorage.getItem('text');

document.body.append(message);

//__________________________________________________________________

// Object-like access

// This method is usually not recommended.

// Example: 

// set key
localStorage.message2 = 'This is a message to test the localStorage. Object-like access';

// get key
alert(localStorage.message2);

// remove key
delete localStorage.message2;

//__________________________________________________________________

// Looping over keys

// Here are two ways to loop over storage objects.

// You can loop over the keys using the example below.

localStorage.setItem('text2', 'This is a list of all messages in localStorage.');

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    let list = document.createElement('div');

    list.className = 'list'

    list.innerHTML = `${key}: ${localStorage.getItem(key)}`;

    document.body.append(list);
}

// Or you can use this method below. The "continue" means you are
// skipping over the built in fields that are not needed.

for (key in localStorage) {

    if (!localStorage.hasOwnProperty(key)) {
        continue;
    }
    console.log(key); 
  }

//__________________________________________________________________

// Strings only

// You can properly store objects using JSON.

localStorage.user = JSON.stringify({name: "Joanna"});

let user = JSON.parse(localStorage.user);

alert(user.name);

//__________________________________________________________________

// sessionStorage

// SessionStorage is the same as localStorage but limited.
// It will only keep storage onto one tab, and it will remain during page
// refresh, but not when you close or open the tab.

//__________________________________________________________________

// Storage event

// storage event triggers, with properties:

// key – the key that was changed (null if .clear() is called).
// oldValue – the old value (null if the key is newly added).
// newValue – the new value (null if the key is removed).
// url – the url of the document where the update happened.
// storageArea – either localStorage or sessionStorage object where the update happened.