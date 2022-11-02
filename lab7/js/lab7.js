/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* Author: Aakaash Naraannan <anaraya4@ucsc.edu
* License: Public Domain
*/

function sortName() {
  var userName = window.prompt("please tell me your name:");
  console.log("username =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the nameArray
  var nameArraysort = nameArray.sort();
  console.log("nameSorted = ", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);

  return nameSorted;
}

// Output
document.writeln("Hey, I fixed your name: ",
  sortName(), "</br>");
