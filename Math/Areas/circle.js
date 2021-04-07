//Made by REPL.it
function getID(i) {
  return document.getElementById(i);
}
function getVal(i) {
  return getID(i).value;
}
function solve() {
  var a = parseInt(getVal("rad")),
    b = parseInt(getVal("diameter"));
  var sol1 = getID("sol1"),
    sol2 = getID("sol2");
  if (isNaN(a)) { a = b / 2 };
  if (isNaN(b)) { b = 2 * a };
  if (isNaN(a) && isNaN(b)) { sol1.innerHTML = "you have to fill in either the radius or diameter" }
  sol1.innerHTML = "area = " + Math.PI * (a ** 2) + ", or " + a ** 2 + "pi"
  if (2 * (Math.PI * a) == Math.PI * b) {
    var circumference = Math.PI * b
  }
  sol2.innerHTML = "circumference = " + circumference + ", or " + b + "pi"
}

var submitButton = document.getElementById("submit");
submitButton.onclick = function () {
  solve();
};