/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // random generator stolen from stackoverflow
  // toString(16) turns the number into an hexadecimal value
  //  16777215 in decimal = FFFFFF in hex
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector("button").addEventListener("click", function(e) {
    document.body.style.backgroundColor = color;
  });
})();
