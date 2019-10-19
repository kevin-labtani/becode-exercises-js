/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let optionsIf = { weekday: "long" };
  let optionsDisplay = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let year;
  document.querySelector("#year").addEventListener("change", function(e) {
    year = e.target.value;
    if (isNaN(year)) {
      alert("Merci de choisir une année!");
    }
  });

  document.querySelector("button").addEventListener("click", function(e) {
    // set the year and the day, and loop over the 12 months
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      let date = new Date(year, monthIndex, 13);
      console.log(date);
      let spooky = date.toLocaleDateString("fr-FR", optionsIf);
      let spookyDisplay = date.toLocaleDateString("fr-FR", optionsDisplay);
      if (spooky === "vendredi") {
        alert(`le ${spookyDisplay} est un vendredi 13!`);
      }
    }
  });
})();
