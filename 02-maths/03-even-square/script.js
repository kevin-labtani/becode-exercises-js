/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    let list = "";
    for (let index = 1; index <= 21; index++) {
      if (index % 2 == 0) {
        let result = index * index;
        list += `${index} squared is ${result}, `;
      }
    }
    alert(list);
  });
})();
