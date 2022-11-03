/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* License: Public Domain
*/
//find the target elment
var buttonEl = document.getElementByid("mybutton");
buttonEl.addEventListener("click", function(){

// use this input to change the text from'hello, World!' to 'Hello' + the user's names
// find the element
var nameEl = document.getElementById("name");
nameEl.innerHTML = name;
// or we can do this in one step, like this:
// document.getelementById("name").innerHTML = name;

}

// Output
document.writeln("Hey, I fixed your name: ",
  sortName(), "</br>");
