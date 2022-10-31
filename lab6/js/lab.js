/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* Author: Aakassh Narayannan <anaraya4@ucsc.edu>
* License: Public Domain
*/

//Define Variables
myTransport = ["Honda Civic", "Bus", "Bike", "walk"];

myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "white",
  year: 2017,
  age:function() {
    return 2019 - age;
  }
}

// output
document.writeln("kinds of Transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '/t'), "</pre>");
