export async function renderWithTemplate(template, parentElement, data, callback, position = "afterbegin", clear = true) {
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

export function loadHeaderAndFooter() {
    const headerTemplate = loadTemplate("https://jgohnert.github.io/wdd330/main/partials/header.html");
    const footerTemplate = loadTemplate("https://jgohnert.github.io/wdd330/main/partials/footer.html");
    const parentHeader = document.querySelector('#main-header');
    const parentFooter = document.querySelector('#main-footer');
    renderWithTemplate(headerTemplate, parentHeader, {}, hamburgerMenu);
    renderWithTemplate(footerTemplate, parentFooter);
}

function hamburgerMenu() {
  const menuButton = document.querySelector("#menu");
  const menuNavigation = document.querySelector(".navigation");
  
  menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("open");
      menuNavigation.classList.toggle("open");
  });
}
