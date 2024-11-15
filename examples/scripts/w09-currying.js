//Currying transforms functions, and doesn't call functions.

const myFullName = document.querySelector(".my-full-name");

// The curry(n) is a helper function. It does currying for three arguments in n.
// curry(n) for 3 arguments n(a, b, c) translates it as a function that runs n(a)(b)(c).
function currying(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return function(c) {
        return f(a, b, c);
      }
    };
  };
}

function nameFrom(a, b, c) {
    return `${a} ` + `${b}. ` + `I live in ${c}.`;
}

let fullName = currying(nameFrom);

myFullName.textContent = `My name is ${fullName("Joanna")("Gohnert")("Idaho")}`;

// When fullName("Joanna") is called, it's saved in the Lexical Environment,
//  and a new wrapper is returned function(b)
