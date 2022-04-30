// in Ex9 to Ex15, change the name of the following function properly
function problem12() {
  
  var outputObj = document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  var aNum = a;
  var mod = "";
  var reverse = mod;

    while (aNum>0) {
      mod = aNum % 10;
      aNum = (aNum-mod)/10;
      reverse += mod;
      if (reverse == a) {
        outputObj.innerHTML = "number: " + a + "<br><br>equal to its reverse? " + "yes";
      }else {
        outputObj.innerHTML = "number: " + a + "<br><br>equal to its reverse? " + "no";
      }
    }

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";

  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}