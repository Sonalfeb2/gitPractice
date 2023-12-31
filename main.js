var form = document.getElementById("add-form");
var itemList = document.getElementById("items");
itemList.addEventListener('click', RemoveItem);
form.addEventListener("submit", AddItem);
function AddItem(e) {
  e.preventDefault();
  var itemValue = document.getElementById("item").value;
  var newList = document.createElement("li");
  newList.className = "list-group-item";
  var text = document.createTextNode(itemValue);
  newList.appendChild(text);
  console.log(newList);
  var button = document.createElement("button");
  button.className = "btn btn-danger btn-sm float-right delete";

  var btext = document.createTextNode("X");
  button.appendChild(btext);
  newList.appendChild(button);
  itemList.appendChild(newList);
}

function RemoveItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

var search = document.getElementById('search');
search.addEventListener('keyup', SearchItem);
function SearchItem(e){
    var input = e.target.value.toLowerCase();
    var itemList = document.getElementsByTagName('li');
    Array.from(itemList).forEach((item)=>{
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(input)!=-1){
            item.style.display ="block";
        }
        else{
            item.style.display ="none";
        }
    })
    
}