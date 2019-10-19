/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  finished = false;
  while (!finished) {
    let age = prompt("How old are you?");
    let sex = prompt("What's your sex?");
    let city = prompt("where do you live?");
    let confirmation = confirm(
      `You are ${age} years old, you sex is ${sex} and you live in ${city}`
    );
    if (confirmation) {
      finished = true;
    }
  }
})();
