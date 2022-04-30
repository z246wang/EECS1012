// in Ex9 to Ex15, change the name of the following function properly
function triangle() {
  
  var outputObj = document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  var numA ="";
  var numB ="XX ";


  outputObj.innerHTML = "number: " + a + "<br>";

  for(var i=1; i<=a; i+=1) {
    numA += numB;
    outputObj.innerHTML += "<br>" + numA;
  }
  

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";

  outputObj.style.textAlign ="left";
  outputObj.style.fontSize ="11px";

  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}