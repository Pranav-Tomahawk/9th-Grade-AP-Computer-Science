//parts of code taken from REPL.it
function getID(i) {
  return document.getElementById(i);
};
function getVal(i) {
  return getID(i).value;
};

function solve() {
  var x1 = parseInt(getVal("x1"), 10);
  var x2 = parseInt(getVal("x2"), 10);
  var y1 = parseInt(getVal("y1"), 10);
  var y2 = parseInt(getVal("y2"), 10);
  var answer = getID("solution");
  var message = getID("message");
  var dist = Math.sqrt(((x2 - x1) ** 2) - ((y2 - y1) ** 2));
  if (isNaN(x1)) { error.innerHTML = "you must fill in all of the blanks" };
  if (isNaN(x2)) { error.innerHTML = "you must fill in all of the blanks" };
  if (isNaN(y1)) { error.innerHTML = "you must fill in all of the blanks" };
  if (isNaN(y2)) { error.innerHTML = "you must fill in all of the blanks" };
  if (dist > 0) {
    answer.innerHTML = "<p>" + dist + "</p>";
    message.innerHTML = "<p> </p>";
  } else {
    answer.innerHTML = "<p> No Solutions </p>";
    message.innerHTML = "<p> </p>";
  };
};

var submitButton = document.getElementById("submit");
submitButton.onclick = function () {
  solve();
};