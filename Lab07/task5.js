/* Task5.js - Add your Java Script Code Here */
function getRandom(num) {
    return Math.floor(Math.random()*num);
}

function date() {
    var a = ["Sun", "Mon", "Tue", "Wes", "Thu", "Fri", "Sat"];
    var b = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date();
    var day = d.getDate();
    var year = d.getFullYear();
    var week = a[d.getDay()];
    var month = b[d.getMonth()];

    document.getElementById("mydata").innerHTML="Today is " + week + "," + "<br>" + month + " " + day + ", " + year; 
}