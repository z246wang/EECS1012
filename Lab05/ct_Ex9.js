// in Ex9 to Ex15, change the name of the following function properly
function problem_09() {
  
  var outputObj = document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  var aNum = a;
  var mod = "";
  

  outputObj.innerHTML = "number: " + a + "<br><br>its digits: ";

    while (aNum>0) {
      mod = aNum % 10;
      aNum = (aNum-mod)/10;
      outputObj.innerHTML += mod + ", ";
    }
  
    
  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}