//1. basic-web.js
//console.log(movies[2]);
//2.When you start writing JavaScript files that are attached to web pages it means that you now have access to the Document Object Model (DOM).
//We can use JavaScript to read from or update any of the HTML in the attached web page.

// DOM - Document Objects Model
// 1. Convert the array of movies into a string
let names = movies.join(", ");
console.log(names);
// 2. Find the paragraph with the id "paragraph"
let p = document.getElementById("paragraph");
console.log(p);
// 3. Put the new string inside the paragraph
p.textContent = names;  