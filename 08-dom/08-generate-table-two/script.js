/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const createTable = document.createElement("table");
  const createTableBody = document.createElement("tbody");
  document.querySelector("#target").appendChild(createTable);
  document.querySelector("table").appendChild(createTableBody);

  for (let index = 0; index < 10; index++) {
    document
      .querySelector("tbody")
      .appendChild(document.createElement("tr"))
      .setAttribute("id", index + 1);
  }

  for (let index = 0; index < 10; index++) {
    document
      .querySelectorAll("tr")
      .forEach(el =>
        el
          .appendChild(document.createElement("td"))
          .setAttribute("id", index + 1)
      );
  }

  for (let index = 0; index < 10; index++) {
    document.querySelectorAll("td").forEach(function(el) {
      el.textContent = el.id * el.parentElement.id;
      el.style.border = "1px solid grey";
    });
  }
})();
