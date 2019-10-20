/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
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

    set name(name) {
      const names = name.split(" ");
      this.firstName = names[0];
      this.lastName = names[1];
    }

    get name() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  document.querySelector("button").addEventListener("click", function(e) {
    me = new Person("Kevin", "Labtani");
    console.log(me.name);
    me.name = "John Doe";
    console.log(me.name);
  });
})();
