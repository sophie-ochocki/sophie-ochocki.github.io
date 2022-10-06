var n_p = document.getElementById("n_p");

var o_p = document.getElementById("o_p");

var n_h = document.getElementById("n_h");

var h_w = document.getElementById("h_w");

var btn = document.getElementById("btn1");
btn.addEventListener('click', myFunction);

function myFunction (){
    var a = Number(n_p.value);
    var b = Number(o_p.value);
    var c = Number(n_h.value);
    var d = Number(h_w.value)

    var w;
    if (d>c){
       w = (a*c)+(b*(d-c));
       var wage = document.getElementById("wage");
       wage.innerHTML = w;
    }else {
        w = d*a;
        var wage = document.getElementById("wage");
        wage.innerHTML = w;
    }
}