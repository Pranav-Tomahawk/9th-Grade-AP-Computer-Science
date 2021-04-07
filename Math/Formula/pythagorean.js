//parts of code taken from REPL.it
function getID(i) {
  return document.getElementById(i);
};

function getVal(i) {
  return getID(i).value;
};

function solve() {
  var a = parseInt(getVal("a"), 10);
  var b = parseInt(getVal("b"), 10);
  var c = parseInt(getVal("c"), 10);
  var error = getID("error");
  var solution = getID("solution");
  var message = getID("message");
  var nanA = 0;
  var nanB = 0;
  var nanC = 0;
  if (isNaN(a)) {
    a = Math.sqrt(c ** 2 - b ** 2);
    nanA = 1;
  };
  if (isNaN(b)) {
    b = Math.sqrt(c ** 2 - a ** 2);
    nanB = 1;
  };
  if (isNaN(c)) {
    c = Math.sqrt(a ** 2 + b ** 2);
    nanC = 1;
  };
  if (a ** 2 + b ** 2 == c ** 2 && (!nanC && !nanB && !nanA)) {
    error.innerHTML = "<p>The pythagorean triangle is a success</p>";

    message.innerHTML = "<p> </p>";

  } else
    if (a ** 2 + b ** 2 == c ** 2 && nanC && Number.isInteger(c)) {
      error.innerHTML = "<p>The pythagorean triangle is a success</p>";
      solution.innerHTML = "<p>The C value is: " + c + "</p>";
      message.innerHTML = "<p> </p>";
      document.getElementById("c").placeholder = c;
    } else if (a ** 2 + b ** 2 == c ** 2 && nanB && Number.isInteger(b)) {
      error.innerHTML = "<p>The pythagorean triangle is a success</p>";
      solution.innerHTML = "<p>The B value is: " + b + "</p>";
      message.innerHTML = "<p> </p>";
      document.getElementById("b").placeholder = b;
    } else if (a ** 2 + b ** 2 == c ** 2 && nanA == 1 && Number.isInteger(a)) {
      error.innerHTML = "<p>The pythagorean triangle is a success</p>";
      solution.innerHTML = "<p>The A value is: " + a + "</p>";
      message.innerHTML = "<p> </p>";
      document.getElementById("a").placeholder = a;
    } else {
      solution.innerHTML = "<p> </p>";
      error.innerHTML = "<p>The pythagorean triangle is not possible</p>";
      message.innerHTML = "<p> </p>";
    };
};

var submitButton = document.getElementById("submit");

submitButton.onclick = function () {
  solve();
};