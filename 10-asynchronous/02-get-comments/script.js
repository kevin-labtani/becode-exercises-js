/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
  document.querySelector("button").addEventListener("click", function(e) {
    window.lib.getPosts((err, articles) => {
      articles.forEach((article, index) => {
        window.lib.getComments(article.id, (error, comments) => {
          article.comments = comments;
        });
      });
      console.log(articles);
    });
  });
})();
