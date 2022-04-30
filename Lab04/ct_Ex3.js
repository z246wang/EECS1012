// in Ex2 to Ex5, change the name of the following function properly
function equation() {

  var a=parseInt(document.getElementById("number1").value);
  var b=parseInt(document.getElementById("number2").value);
  var c=parseInt(document.getElementById("number3").value);
 
  /* in Ex2 to Ex4, you need to replace the following line 
      with some other formulas */
  var root1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
  var root2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
  var r1 = root1.toFixed(2);
  var r2 = root2.toFixed(2);
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
  document.getElementById("output").innerHTML="one root: " + r1 + "<br>" + "another: " +r2;
  

}
