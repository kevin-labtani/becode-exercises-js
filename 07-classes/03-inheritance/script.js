/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  class Cat extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
    static greeting = "Meow! Meow!";
  }

  class Dog extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
    static greeting = "Bark! Bark!";
  }

  document.querySelector("button").addEventListener("click", function(e) {
    doggie = new Dog("Wolfie");
    console.log(doggie.sayHello());

    Kitty = new Cat("Maru");
    console.log(Kitty.sayHello());
  });
})();
