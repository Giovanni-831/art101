/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* Author: Aakaash Nrayannan <anaraya4@ucsc.edu>
*License: Public Domain
*/
var outputEl = document.getElementByid("output");


var new1El = document.createElement("p");
new1El.innerHTML = "Hello, Our names are Gio and Aakaash.";
new1El.appendChild(new1El);
new1El.style.color='blue';

var new2El = document.createelement("p");
new2El.innerHTML = "Gio and Aakaash love pizza";
outputEl.appendChild(new2El);
new2El.style.fontSize="20pt";
