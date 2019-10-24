/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("#hero-name").addEventListener("change", function(e) {
    heroName = e.target.value;
  });
  document
    .querySelector("#hero-alter-ego")
    .addEventListener("change", function(e) {
      heroAlt = e.target.value;
    });

  document
    .querySelector("#hero-powers")
    .addEventListener("change", function(e) {
      heroPowers = e.target.value.split(",");
    });

  document.querySelector("button").addEventListener("click", async function(e) {
    let newId = 10;

    let newHero = {
      id: newId,
      name: heroName,
      alterEgo: heroAlt,
      abilities: heroPowers
    };

    let response = await fetch("http://localhost:3000/heroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(newHero)
    });

    const displayResult = await fetch(`http://localhost:3000/heroes`);
    if (displayResult) {
      const data = await displayResult.json();
      newId = data.length + 1;
      console.log(data);
    } else {
      throw new Error("Unable to fetch heroeos");
    }
  });
})();

// example
// (async () => {
//   let user = {
//     name: "John",
//     surname: "Smith"
//   };

//   let response = await fetch("/article/fetch/post/user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8"
//     },
//     body: JSON.stringify(user)
//   });

//   let result = await response.json();
//   alert(result.message);
// })();
