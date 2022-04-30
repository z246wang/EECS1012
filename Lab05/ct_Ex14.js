// in Ex9 to Ex15, change the name of the following function properly
function fibonacci() {
  
  var outputObj = document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));

  var secondLast=0;
  var last=1;
  var numA=0;

  outputObj.innerHTML = "number: " + a + "<br><br>" + "Finonacci: " + secondLast + ", " + last + ", ";


  for(var i=3; i<=a; i+=1) {
    numA = secondLast + last;
    secondLast = last;
    last = numA;
    outputObj.innerHTML += numA + ", ";
  }

  
  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";

  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}