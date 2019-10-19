/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("addition").addEventListener("click", () => {
    const a = document.querySelector("#op-one").value;
    const b = document.querySelector("#op-two").value;
    answer = parseInt(a) + parseInt(b);
    alert(answer);
  });

  document.getElementById("substraction").addEventListener("click", () => {
    const a = document.querySelector("#op-one").value;
    const b = document.querySelector("#op-two").value;
    answer = parseInt(a) - parseInt(b);
    alert(answer);
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    const a = document.querySelector("#op-one").value;
    const b = document.querySelector("#op-two").value;
    answer = parseInt(a) * parseInt(b);
    alert(answer);
  });

  document.getElementById("division").addEventListener("click", () => {
    const a = document.querySelector("#op-one").value;
    const b = document.querySelector("#op-two").value;
    answer = parseInt(a) / parseInt(b);
    alert(answer);
  });
})();
