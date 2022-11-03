/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* License: Public Domain
*/
function shuffleArray(array){
  var currentIndex = array.length, temporaryValue, randomIdex;
  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    temporaryValue = array(currentIndex);
    array[currentIndex] = array[randomIdex];
    array[randomIndex] = tempoararyValue;
  }
}

function toTitleCase(str){
  return str.replace(
    /\w\S*g,
    function(txt){
      return txt.charAt(0).toUpper() + txt.substr(1).toLowerCase();
    }
  };
}

buttonEl = document.getElementById("my-button");
console.log("buttom element:", buttonEl);

inputEl = document.getElementById("user-name");
console.log("in

outputEl = document.getElementById("output");
console.log("output element:", outputEl);

buttonEl.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName + toTitlecase(reorderUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
