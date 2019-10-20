/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  indicator = document.querySelector(".indicator");
  document.querySelector("#pass-one").addEventListener("input", function(e) {
    if (e.target.value.length >= 8 && e.target.value.match("(?=(.*?\\d){2})")) {
      indicator.textContent = "ok";
    }
  });
})();
