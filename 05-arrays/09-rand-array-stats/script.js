/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("button").addEventListener("click", function(e) {
    let array = [];
    let sortedArray = [];
    let sum = 0;

    document.querySelectorAll("td").forEach(function(item) {
      // generate random number
      let min = 0;
      let max = 100;
      let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

      array.push(randomNum);
      item.textContent = randomNum;
      sum += randomNum;
    });
    // sort array to get min and max
    sortedArray = array.sort((a, b) => a - b);

    document.querySelector("#min").textContent = sortedArray[0];
    document.querySelector("#max").textContent =
      sortedArray[sortedArray.length - 1];
    document.querySelector("#sum").textContent = sum;
    document.querySelector("#average").textContent = sum / array.length;
  });
})();
