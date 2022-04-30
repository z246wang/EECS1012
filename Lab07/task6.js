/* Task6.js - Add your Java Script Code Here */
var i = 20;

function cd() {
   document.getElementById("mydata").innerHTML=i;
   i -=1;
   if (i <= 0) {
       document.getElementById("mydata").innerHTML="liftoff!"
   }
}