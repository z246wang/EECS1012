/* Task4.js - Add your Java Script Code Here */
function random() {
    return Math.floor(Math.random()*7);
}

function roll() {
  var a = document.getElementById("mydata");
  var b = random();
  var c = random();
  var d = random();
  var e = random();
  var f = random();
  var g = random();
  a.innerHTML=b + " " + c + ", " + d + " " + e + ", " + f + " " + g;
  var h = (b+c+d+e+f+g)/3;
  a.innerHTML+= "<br>" + "Average = " + h.toFixed(2);
}