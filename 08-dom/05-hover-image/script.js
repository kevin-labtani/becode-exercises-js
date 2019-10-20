/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const imageSource = document.querySelector("img").getAttribute("data-hover");
  console.log(imageSource);

  document.querySelector("img").addEventListener("mouseover", function(e) {
    e.target.src = imageSource;
  });
  // const newImage = document.createElement("img");
  // newImage.src = imageSource;
  // // console.log(newImage);
  // document.querySelector("#target").appendChild(newImage);
  // document.querySelector("#source").remove();
})();
