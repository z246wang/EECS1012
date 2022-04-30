/* Task3.js - Add your Java Script Code Here */
var sum = 0;

function money(dollar) {
    sum = sum + parseFloat(dollar);
    document.getElementById("mydata").innerHTML="Amount = $" + sum.toFixed(2);
}