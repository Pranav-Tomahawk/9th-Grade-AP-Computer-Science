//Made by REPL.it
function getID(i) {
  return document.getElementById(i);
}
function getVal(i) {
  return getID(i).value;
}
function solve() {
  var a = parseInt(getVal("length")),
    b = parseInt(getVal("width"));
  var sol1 = getID("sol1"),
    sol2 = getID("sol2");
  if (isNaN(a)) { sol1.innerHTML = "fill in the length" };
  if (isNaN(b)) { sol1innerHTML = "fill in the width" };
  if (isNaN(a) && isNaN(b)) { sol1.innerHTML = "you have to fill in both the blanks" }
  sol1.innerHTML = "area = " + a * b + " units";
  var perimeter = a + a + b + b;
  sol2.innerHTML = "perimeter = " + perimeter + " units";
}

var submitButton = document.getElementById("submit");
submitButton.onclick = function () {
  solve();
};