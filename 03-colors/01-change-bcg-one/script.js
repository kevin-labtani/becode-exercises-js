/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let color = "";
  document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function(e) {
      color = e.target.textContent;
      console.log(color);
      switch (color) {
        case "Rouge":
          document.body.style.background = "red";
          break;
        case "Vert":
          document.body.style.background = "green";

          break;
        case "Jaune":
          document.body.style.background = "yellow";

          break;
        case "Bleu":
          document.body.style.background = "blue";

          break;
      }
    });
  });
})();
