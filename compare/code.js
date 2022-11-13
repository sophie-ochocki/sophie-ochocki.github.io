var input1 = document.getElementById("input1");
var a = input1.value;
var a = Number(a);

var input2 = document.getElementById("input2");
var b = input2.value;
var b = Number(b);

var input3 = document.getElementById("input3");
var c = input3.value;
var c = Number(c);

var btn = document.getElementById("btn1");
btn.addEventListener('click', myFunction);

function myFunction (a,b,c){
    var a = Number(input1.value);
    var b = Number(input2.value);
    var c = Number(input3.value);

    var m;
    m = a > b ? a : b; //maximum between a and b
    m = m > c ? m : c; // m is the max among a, b, c
    var maximum = document.getElementById("maximum");
    maximum.innerHTML = m;

    // var max;
    // if (a>b){
    //     max = a;
    // }else {
    //     max = b;
    // }
    // if (c > max){
    //     max = c;
    // }

    // if (a>=b && a >=c){
    //     max = a;
    // }
    // if (b >=a && c >=b){
    //     max = c;
    // }
}

