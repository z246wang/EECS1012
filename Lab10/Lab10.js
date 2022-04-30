function question1() {
// pre: input a string
// post: output the string in reversed order
 var str = prompt("enter a string","");
 var reverseStr= function1(str);
 alert(reverseStr + str[0]);

 function function1(str) {
         if (str.length < 2) {
             return str;
         }
         else {
             var temp=[];
             for (var i=1;i<str.length;i++) {
                 var a=function1(str[str.length-i]);
                 temp.push(a);
            }
            return temp.join("");
        }
}
}

function question2() {
// pre: input a natural number
// post: output how many digits 7 in that number
var num = prompt("enter a number","");
alert(howMany7(num));

 function howMany7(a) {
    if (a == 0) {
    return 0;
}
    var left = a % 10;
    if (left == 7) {
        return 1 + howMany7((a-left)/10);
    }else {
        return howMany7((a-left)/10);
    }
 }
}

function question3() {
// pre: input 2 natural numbers
// post: output the 2 numbers' multiplication
var m = parseInt(prompt("enter a number", ""));
var n = parseInt(prompt("enter a number", ""));
alert(multiply(m,n));

 function multiply(a,b) {
     if (b==0) {
         return 0;
     }
     if (b==1) {
         return a;
     }
     return multiply(a,b-1)+a;
 }
}

function question4() {
// pre: input a natural number
// post: output true if the natural number is in the given array of 20 numbers, else output false.
var num = parseInt(prompt("enter a number", ""));
var arr = [8,9,9,12,13,13,13,15,20,100,100,101,123,129,300,1000,5001,20000,20000,34511];
var i=0;
var j=19;
alert(func(num,arr,i,j));

 function func(num,arr,i,j) {
    if (i == j) {
     if (num == arr[i]) {
        return true;
     }
     if (num != arr[i]) {
        return false;
     }
    }
    var mid=Math.floor((i+j)/2);
    if (arr[mid] < num) {
        return func(num,arr,mid+1,j);
    }
    if (arr[mid] >= num) {
        return func(num,arr,i,mid);
    }
 }
}