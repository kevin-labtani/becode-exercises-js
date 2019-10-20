/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
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
    document.querySelector("tbody").appendChild(document.createElement("tr"));
  }
  document.querySelectorAll("tr").forEach(function(node) {
    node.textContent = "this is a row";
    node.style.border = "1px solid lightblue";
  });
})();
