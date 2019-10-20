/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.querySelector("button").addEventListener("click", function(e) {
    password = document.querySelector("#pass-one");
    confirmPassword = document.querySelector("#pass-two");
    if (password.value !== confirmPassword.value) {
      password.setAttribute("class", "error");
      confirmPassword.setAttribute("class", "error");
    }
  });
})();
