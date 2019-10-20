/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const imageSource = document
    .querySelector("#source")
    .getAttribute("data-image");
  // console.log(imageSource);
  const newImage = document.createElement("img");
  newImage.src = imageSource;
  // console.log(newImage);
  document.querySelector("#target").appendChild(newImage);
  document.querySelector("#source").remove();
})();
