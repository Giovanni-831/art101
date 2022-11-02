/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* Author: Aakaash Narayannan <anaraya4@ucsc.edu>
*License: Public Domain
*/

function sqr (x) {
  var resykts = x * x;
  return results;
}
// test function-
console.log("4 squard is:", sqr(4));
console.log("5 squard is:", sqr(5));

array = [24, 52, 21, 13, 12, 18, 8];
console.log("My Array", array);

var result = array.map(sqr);
console.log("Test of squares of array: ", result);

var result = array.map(function(x){
  return x * 2;
})

console.log("Times 2 of array: ", result);
