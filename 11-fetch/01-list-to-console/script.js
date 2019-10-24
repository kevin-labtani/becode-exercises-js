/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("button").addEventListener("click", async function(e) {
    const response = await fetch(`http://localhost:3000/heroes`);
    if (response) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Unable to fetch heroeos");
    }
  });
})();
