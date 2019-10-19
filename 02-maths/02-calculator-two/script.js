/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const performOperation = operation => {
    const a = document.querySelector("#op-one").value;
    const b = document.querySelector("#op-two").value;
    console.log(operation);

    switch (operation) {
      case "addition":
        answer = parseInt(a) + parseInt(b);
        alert(answer);
        break;
      case "substraction":
        answer = parseInt(a) - parseInt(b);
        alert(answer);
        break;
      case "multiplication":
        answer = parseInt(a) * parseInt(b);
        alert(answer);
        break;
      case "division":
        answer = parseInt(a) / parseInt(b);
        alert(answer);
        break;
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
    $btn.addEventListener("click", () => performOperation($btn.id))
  );
})();
