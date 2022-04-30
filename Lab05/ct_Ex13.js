// in Ex9 to Ex15, change the name of the following function properly
function factorial() {
  
  var outputObj = document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));

  var numA = 1;

  for(var i=a; i>0; i-=1) {
    numA = numA * i;
  }
   
  outputObj.innerHTML = "number: " + a + "<br><br>" + a +"! = " + numA;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";

  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}