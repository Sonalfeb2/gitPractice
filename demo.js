// console.dir(document);
// var lists = document.getElementsByTagName("li");

// for (var i = 0; i < lists.length; i++) {
//   lists[i].style.fontWeight = "bold";
//   if (i == 2) {
//     lists[2].style.color = "green";
//   }
// }

var listsQuery = document.querySelectorAll("li");
//nth child is not supporting at my chrome. It was defined as null.
listsQuery[2].style.color = "green";

listsQuery[3].style.display = "none";


