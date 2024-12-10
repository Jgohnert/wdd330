import { loadMenuEvent } from "./menu.js"

async function renderWithTemplate(template, parentElement, data, callback, position = "afterbegin", clear = true) {
    if (clear) {
  
      parentElement.innerHTML = "";
    }
    const htmlString = await template(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if (callback) {
      callback(data);
    }
}

function loadTemplate(path) {
    return async function () {
      const res = await fetch(path);
      if (res.ok) {
        const html = await res.text();
        return html;
      }
    };
}

function loadHeaderFooter() {
    const headerTemplate = loadTemplate("data/partials/header.html");
    const footerTemplate = loadTemplate("data/partials/footer.html");
    const parentHeader = document.querySelector(".main-header");
    const parentFooter = document.querySelector(".main-footer");

    renderWithTemplate(headerTemplate, parentHeader, null, loadMenuEvent); 
    renderWithTemplate(footerTemplate, parentFooter);
}

loadHeaderFooter();