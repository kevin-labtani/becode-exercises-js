/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const target = document.querySelector("#target");

  let heroId;
  document.querySelector("#hero-id").addEventListener("change", function(e) {
    heroId = parseInt(e.target.value);
  });

  const createHero = hero => {
    const list = document.createElement("li");
    list.setAttribute("class", "hero");
    target.appendChild(list);

    const heading = document.createElement("h4");
    heading.setAttribute("class", "title");
    list.appendChild(heading);

    const str = document.createElement("strong");
    str.setAttribute("class", "name");
    str.textContent = hero.name;
    heading.appendChild(str);

    const emphasis = document.createElement("em");
    emphasis.setAttribute("class", "alter-ego");
    emphasis.textContent = hero.alterEgo;
    heading.appendChild(emphasis);

    const parag = document.createElement("p");
    parag.setAttribute("class", "powers");
    parag.textContent = hero.abilities.join(", ");
    list.appendChild(parag);
  };

  const makeRequest = async e => {
    const response = await fetch(`http://localhost:3000/heroes`);

    try {
      const data = await response.json();
      const chosenOne = data.find(element => element.id === heroId);
      if (chosenOne) {
        createHero(chosenOne);
      } else {
        throw new Error("No hero found for this id");
      }
    } catch (error) {
      console.log(error);
    }
  };

  document
    .querySelector("button")
    .addEventListener("click", e => makeRequest());
})();
