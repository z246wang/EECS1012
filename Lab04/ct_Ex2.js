// in Ex2 to Ex5, change the name of the following function properly
function volume() {

  var a=parseInt(document.getElementById("number1").value);
  var b=parseInt(document.getElementById("number2").value);
  var c=parseInt(document.getElementById("number3").value);
 
  /* in Ex2 to Ex4, you need to replace the following line 
      with some other formulas */
  var volume = (4/3) * Math.PI * a * b * c;
  var v = volume.toFixed(2);
 
  /* in Ex5, you should delete from Line 9 to this line */

  /*   //in Ex 5, uncomment this block
  switch (true){
	case (a>89): 
		answer="A+";
		break;
	case (a>79): 
		answer="A";
		break;
		// in Ex5, you need to add more cases for other letter grades
	default:
		answer="F";
  }
  */
  
  /* in Ex2 to Ex5, you need to rename "perimeter" to make it appropriate
     for those problems, you may also need to rename p to a better 
	 variable that you might have in your formulas above */ 
  document.getElementById("output").innerHTML="volume: "+v; 

}
