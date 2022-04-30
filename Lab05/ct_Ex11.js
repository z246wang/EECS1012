// in Ex9 to Ex15, change the name of the following function properly
function problem11() {
  
  var outputObj = document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  var aNum = a;
  var mod = "";
  var sum = 0;

    while (aNum>0) {
      mod = aNum % 10;
      aNum = (aNum-mod)/10;
      sum += mod; 
    }

  outputObj.innerHTML = "number: " + a + "<br><br>sum of digits: " + sum;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";

  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}