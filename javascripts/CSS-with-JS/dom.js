//CSS should always be used to create the default styles for every web page. 
//However, there will always be times when you want to update the styles on your page after it has finished loading.
//Maybe you want to react to a user clicking the page or mousing over something. 
//Maybe you want to remove a single style property or add a single style property to a bunch of elements.
//JavaScript has a number of properties and methods that will allow you to do exactly that.

/* 
element.className // apply the css of a class to another class
element.classList.add() // add the css of a class to another class
element.classList.remove() // remove a css from a class
element.classList.toggle() // Add and remove a css from a class
element.style.propName = value // Edit single property of an element
element.style.cssText = "" // Edit text style for element
window.getComputedStyle(element) // Find out which style properties are being applied in an element
*/

let main = document.querySelector('#main');
let ul = main.querySelector("ul");
let h1 = document.querySelector("header h1");
let foot = document.querySelector("#foot p");

main.className = "some abc";
main.id = "main";
main.title = "mouseover text";

foot.style.backgroundColor = "salmon";
foot.style.cssText = "font-family: sans-serif; lette-spacing: 5px;";

foot.classList.add('some');
foot.classList.remove('other');
foot.classList.toggle('other');





