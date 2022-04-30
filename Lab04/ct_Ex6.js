
function Problem06() {

  var a=parseInt(document.getElementById("number1").value);
  
  if (a>0) {
    document.getElementById("output").innerHTML="positive";
  }
  else if(a<0) {
    document.getElementById("output").innerHTML="negative";
  }
  else {
    document.getElementById("button").disabled=true;
  }

}

