document.addEventListener("DOMContentLoaded", function(event) { 
  
let ourTable = document.getElementById("container");

ourTable.onclick = function(event) {
let target = event.target;
  while (target != ourTable) {
    if (target.tagName == 'TD') {
      target.bgColor = "red";
      return;
    }
    target = target.parentNode;
  }
}
});