// Write your code here!
const node = document.getElementById("main");
if (node.parentNode) {
    node.parentNode.removeChild(node);
}
let newHeader;

document.body.onload = addElement;

function addElement() {
  newHeader = document.createElement("h1");
  newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "Amanda is the champion";


  const currentDiv = document.getElementById("script");
  document.body.insertBefore(newHeader, currentDiv);
}

