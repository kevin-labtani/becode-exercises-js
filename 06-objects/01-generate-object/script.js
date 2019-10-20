/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("button").addEventListener("click", function(e) {
    // lastname, firstname, age, city, country.
    const me = {
      lastname: "Labtani",
      firstname: "Kevin",
      age: 37,
      city: "Nivelles",
      country: "Belgique"
    };
    console.log(me);
  });
})();
