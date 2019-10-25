/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let heroId;
  document.querySelector("#hero-id").addEventListener("change", function(e) {
    heroId = parseInt(e.target.value);
  });

  document.querySelector("button").addEventListener("click", async function(e) {
    try {
      let response = await fetch(`http://localhost:3000/heroes/${heroId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        console.log(`response status: ${response.status}`);
      } else {
        throw new Error("There's no hero for this id");
      }
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  });
})();
