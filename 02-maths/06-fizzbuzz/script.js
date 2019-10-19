/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const fizzBuzz = function() {
    for (let index = 1; index <= 100; index++) {
      if (index % 3 === 0 && index % 5 === 0) {
        console.log("Fizzbuzz");
      } else if (index % 3 === 0) {
        console.log("Fizz");
      } else if (index % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(index);
      }
    }
  };
  fizzBuzz();
})();
