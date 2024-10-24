// Form properties and methods

// You can use the name or number in the document to retrieve the form.



function displayName() {

    // This is how you retrieve a form by name.

    let myForm = document.forms.name;

    let firstName = myForm.elements.fname;

    firstName.style.display = "block";

    // This is how you retrieve a form by it's number.

    let myform = document.forms[0];

    let lastName = myform.elements.lname;

    lastName.style.display = "block";

}

displayName();

// This next function shows how the object HTMLInputElement displays the radio as a 
// collection of multiple elements with the same name.

function displayCollection() {

    const radioCollection = document.querySelector(".collection")

    let secondForm = document.forms[1];

    let petElements = secondForm.elements.pet;

    radioCollection.textContent = petElements[0];

}

displayCollection();

//________________________________________________________________________________________

// Form elements

// You can also access input and textarea by using input.value or input.checked.

// Never use textarea.innerHTML. Always use textarea.value.

// Example:

function displayNewValue() {

    let thirdForm = document.forms[2];

    thirdForm.myfullname.value = "This is the new value";

}

displayNewValue();

//________________________________________________________________________________________

// select and option

// <select> has three properties:

const selectionOne = document.querySelector(".selection-one");
const selectionTwo = document.querySelector(".selection-two");
const selectionThree = document.querySelector(".selection-three");
const selectionFour = document.querySelector(".selection-four");

function selectOption() {
    // select.options – the collection of <option> subelements,
    selectionOne.options[0].selected = true;
    // select.selectedIndex – the number of the currently selected <option>.
    selectionTwo.selectedIndex = 1;
    // select.value – the value of the currently selected <option>
    selectionThree.value = 'green';

    //Below is how you select multiple values if the multiple attribute is used. It is rarely used.
    let selectAllValues = Array.from(selectionFour.options)
    .filter(option => option.selected)
    .map(option => option.value);

    return selectAllValues
}

selectOption();

//________________________________________________________________________________________

// new Option

// You can create an option element using this: 

// option = new Option(text, value, defaultSelected, selected);

// text – the text inside the option,
// value – the option value,
// defaultSelected – if true, then selected HTML-attribute is created,
// selected – if true, then the option is selected.

// Example:

// let option = new Option("Text", "value", true, true);