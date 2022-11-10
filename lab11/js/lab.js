/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* License: Public Domain
*/

k.fn.init {div#headshot}
  0: div# headshot
  length: 1
  [ [Prototype]]: object (0)

  // new element on the page
k.fn.inity[button#my-button];
  0: button#my-button
  length: 1
  [[Prototype]]: Object(0)

// change Css proerties
$(".wrap").css("padding", "100px");

Click(function(){
  .append("<button>No, press me!");
});
