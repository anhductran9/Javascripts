//3. How to use JavaScript to locate specific HTML Elements inside your webpage.

/**
document.getElementbyId(id) - return 1 element node 
document.querySelector(css) - return 1 element node
document.querySelectorAll(css) - return NodeList
**/

/* let foot = document.getElementById("foot");
let p = document.getElementById("paragraph");
p.textContent = "First Take";

let p2 = document.querySelector(".main p.some");
p2.textContent = "Second Take";

let ps = document.querySelectorAll(".main p");
ps.textContent = "asdf"; //Not gonna work

for(var i = 0; i < ps.length; i++){
    ps[i].textContent += " TKANE";
} */

//4. With just four methods and two properties you can create new HTML content in your JavaScript file and then add that content to a web page. 
//This will be new content that didn't exist in the original HTML file.

/** 
document.createElement(tagname) - returns 1 element node
document.createTextNode(text) - returns 1 text node
parent.appendChild(node) - adds child to parent
parent.removeChild(node) - removes child from parent

element.innerHTML = a text with HTML 
element.textContent 
**/

/* let main = document.querySelector('.main');
let h2 = main.querySelector('h2');
h2.textContent = 'Loading Movies';

let p = main.querySelector('p');
p.innerHTML = "This is the list of <strong>MOVIES</strong>";

let ul = document.createElement('ul');
main.appendChild(ul);

movies.forEach(function(item){
    let li = document.createElement('li');
    let txt = document.createTextNode(item);
    li.appendChild(txt);
    ul.appendChild(li);
});
 */
//main.removeChild(ul);

//5. Using the Node and Element properties you can search through a web page to find specific elements and their contents.
//Remember that all the Nodes have parent-child relationships to each other. 
//Only Element nodes can be parents. 
//However, depending on the property that you use you can get lists of Elements or lists that include element nodes, text nodes, and comment nodes.

/**
parent.children - is a nodeList of elements
parent.firstElementChild - is 1 element node
parent.lastElementChild - is 1 element node
node.nextElementSibling - is 1 element node
node.previousElementSibling - is 1 element node
node.parentNode - is 1 element node
parent.contains(node) - returns Boolean
**/

/* let main = document.querySelector('.main');

let ul = main.children[4];
let lis = ul.children;
let firstLi = lis[0]; //ul firstElementChild

var txt = firstLi.textContent;
var equaltxt = firstLi.firstChild.nodeValue;
console.log(txt, equaltxt);

firstLi.firstChild.nodeValue = txt.toUpperCase();

var bool = main.contains(firstLi);
console.log(bool); */

//6. For slightly more advanced methods for updating the HTML, try using insertBefore( ), replaceChild( ), and cloneNode( ).
/**
node.insertBefore(newNode, referenceNode) - insert a node
parent.replaceChild(new,old) - replace one node inside parent with another node
node.cloneNode(true) - copy a node and optionally its children. 
**/

/* let ul = document.querySelector('.main ul');
let lis = ul.children;
let V = lis[6];
let newNode = document.createElement('li');
newNode.textContent = "Rocket League";
ul.insertBefore(newNode, V);

let f1 = document.createElement("li");
f1.textContent = "F1 2021";
ul.replaceChild(f1, newNode);

let f = ul.cloneNode(false);
let t = ul.cloneNode(true);
console.log(f); console.log(t); */

//7. you can retrieve or update the value in any HTML element Attribute.
//Also included is a brief discussion of the dataset property that allows you to store custom attribute values in your HTML.

/**
element.getAttribute(name);
element.setAttribute(name, value); // add attribute into HTML file

element.dataset.property = value;
**/

let main = document.querySelector('.main');
let li = main.querySelector("ul li");
main.setAttribute("title", "MYGAMES");
console.log(li.getAttribute("data-year"));
li.dataset.year = 2018;
console.log(li.dataset.year);
