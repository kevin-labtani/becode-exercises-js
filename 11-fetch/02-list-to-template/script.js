/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const target = document.querySelector("#target");

  document.querySelector("button").addEventListener("click", async function(e) {
    const response = await fetch(`http://localhost:3000/heroes`);
    if (response) {
      const data = await response.json();
      data.forEach(element => {
        const list = document.createElement("li");
        list.setAttribute("class", "hero");
        target.appendChild(list);

        const heading = document.createElement("h4");
        heading.setAttribute("class", "title");
        list.appendChild(heading);

        const str = document.createElement("strong");
        str.setAttribute("class", "name");
        str.textContent = element.name;
        heading.appendChild(str);

        const emphasis = document.createElement("em");
        emphasis.setAttribute("class", "alter-ego");
        emphasis.textContent = element.alterEgo;
        heading.appendChild(emphasis);

        const parag = document.createElement("p");
        parag.setAttribute("class", "powers");
        parag.textContent = element.abilities.join(", ");
        list.appendChild(parag);
      });
    } else {
      throw new Error("Unable to fetch heroes");
    }
  });
})();
