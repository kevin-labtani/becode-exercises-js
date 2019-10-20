/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    sayHello() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  }
  document.querySelector("button").addEventListener("click", function(e) {
    me = new Person("Kevin", "Labtani");
    me.sayHello();
  });
})();
