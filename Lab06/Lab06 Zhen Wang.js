function p1() {

    var num=parseInt(prompt("enter a number: ", ""));
    var prime=true;
    var d=2;

    while (prime==true, d<=num/2) {
        if (num%d==0) {
            prime = false;
        }
        d += 1;     
    }

    if (prime==true) {
        document.getElementById("output").innerHTML=num + " is prime";
    }else {
        document.getElementById("output").innerHTML="is not prime";
    }
}

function p2() {

    var sum1=0;
    var sum2=0;

    for (var i=1;i<=4;i+=1) {
        var num=parseFloat(prompt("enter a number: ", ""));
        sum1 += num;
    }

    for (i=5;i<=8;i+=1) {
        num=parseFloat(prompt("enter a number: ", ""));
        sum2 += num;
    }

    if (sum1==sum2) {
        document.getElementById("output").innerHTML="yes";
    }else {
        document.getElementById("output").innerHTML="no";
    }
}

function p3() {
    var p=0;
    var n=0;

    do {
        var num=parseFloat(prompt("enter a number", ""));
        if (num>0) {
            p += 1;
        }else if (num<0) {
            n += 1;
        }
    }while (num!=0&&p<=2*n);
}

function p4() {
    var cnt1=0;
    var cnt2=0;

    for (var i=1;i<=4;i+=1) {
        var num=parseFloat(prompt("enter a number", ""));
        if (num<0) {
            cnt += 1;
        }
    }

    for (i=5;i<=8;i+=1) {
        var num=parseFloat(prompt("enter a number", ""));
        if (num>0) {
            cnt2 += 1;
        }
    }

    if (cnt1==cnt2) {
        document.getElementById("output").innerHTML="yes";
    }else {
        document.getElementById("output").innerHTML="no";
    }
}

function p5() {
    var num=parseFloat(prompt("enter a number",""));
    var pSet=document.getElementById("output");
    pSet.innerHTML="";

    for (var i=2;i<=num;i+=1) {
        if (prime()==true) {
            pSet.innerHTML += i + " ";
        }
    }

    function prime() {
        var flag=true;
        var d=2;

        while (flag==true&&d<=i/2) {
            if (i%d==0) {
                flag = false;
            }
            d += 1;
        }
        return flag;
    }
}

function p6() {
    var num=parseFloat(prompt("enter a number",""));
    var pSet=document.getElementById("output");
    pSet.innerHTML="";

    for (var i=1;i<=num;i+=1) {
        if (prime()==true && has7()==true) {
            pSet.innerHTML += i + " ";
        }
    }

    function prime() {
        var flag=true;
        var d=2;

        while (flag==true&&d<=i/2) {
            if (i%d==0) {
                flag = false;
            }
            d += 1;
        }
        return flag;
    }

    function has7() {
        var a=i;

        while (a>0) {
            var mod=a%10;
            a=(a-a%10)/10;
            if (mod==7) {
                return true;
            }
        }
    }

}
