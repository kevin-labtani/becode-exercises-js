/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let day = 1;
  let month = 1;
  let year = 1955;

  document.querySelector("#dob-day").addEventListener("change", function(e) {
    day = parseInt(e.target.value);
    // console.log(day, typeof day);
  });
  document.querySelector("#dob-month").addEventListener("change", function(e) {
    month = parseInt(e.target.value);
  });
  document.querySelector("#dob-year").addEventListener("change", function(e) {
    year = parseInt(e.target.value);
  });

  document.querySelector("button").addEventListener("click", function(e) {
    let birthDate = new Date(year, month - 1, day);
    let calcAge = Date.now() - birthDate.getTime(); // in milliseconds
    let epochAge = new Date(calcAge); // in ms from epoch
    let actualAge = epochAge.getUTCFullYear() - 1970; // ty stackoverflow
    console.log(calcAge, epochAge, actualAge);
    alert(`You are ${actualAge} years old`);
  });
})();
