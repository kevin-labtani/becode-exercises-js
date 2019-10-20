/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true }
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré"
  ]);

  document.querySelector("button").addEventListener("click", function(e) {
    const ArrayAdj = Array.from(adjectives);
    // generate random number for birds
    let min = 0;
    let max = birds.length - 1;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // generate random number for adjectives
    let min2 = 0;
    let max2 = ArrayAdj.length - 1;
    let randomNum2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min;

    let birdName = birds[randomNum].name;
    if (birds[randomNum].fem) {
      birdName = "La " + birdName;
    } else {
      birdName = "Le " + birdName;
    }

    let birdAdj = ArrayAdj[randomNum2];
    if (birds[randomNum].fem) {
      birdAdj += "e";
    }
    document.querySelector("#target").textContent = ` ${birdName} ${birdAdj}`;
  });
})();
