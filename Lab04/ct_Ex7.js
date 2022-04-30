var sumPos=0
var sumNeg=0

function Problem07() {

  var a=parseInt(document.getElementById("number1").value);

  if (a>0) {
    document.getElementById("output").innerHTML="positive";
    sumPos += 1
  }
  else if(a<0) {
    document.getElementById("output").innerHTML="negative";
    sumNeg += 1
  }
  else {
    document.getElementById("output").innerHTML="Pos: " + sumPos + "<br>" + "Neg: " + sumNeg;
    document.getElementById("button").disabled=true;
  }

}

