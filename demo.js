// console.dir(document);
// var lists = document.getElementsByTagName("li");

// for (var i = 0; i < lists.length; i++) {
//   lists[i].style.fontWeight = "bold";
//   if (i == 2) {
//     lists[2].style.color = "green";
//   }
// }

// var listsQuery = document.querySelectorAll("li");
// //nth child is not supporting at my chrome. It was defined as null.
// listsQuery[2].style.color = "green";

// listsQuery[3].style.display = "none";

/////////////////////// Creating Nodes and Modifying Dom /////////////////////////

var items = document.querySelector('#items');
console.log(items.parentElement);
console.log(items.lastElementChild);
console.log(items.lastChild);
console.log(items.firstElementChild);
console.log(items.firstChild);
console.log(items.nextSibling);
console.log(items.nextElementSibling);
console.log(items.previousSibling);
console.log(items.previousElementSibling);
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.setAttribute('title', 'hello New Div');
var newText = document.createTextNode('Hello World');
newDiv.appendChild(newText);
console.log(newDiv)
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

items.insertBefore(newDiv, items.firstElementChild);
