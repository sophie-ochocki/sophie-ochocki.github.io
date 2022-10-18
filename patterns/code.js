var painter1 = document.getElementById("c1").getContext("2d");
var painter2 = document.getElementById("c2").getContext("2d");

function drawBackground(painter1) {
    painter1.fillStyle = "#000000"
    painter1.fillRect (0, 0, 400, 400)
}

function drawBackground(painter2) {
    painter2.fillStyle = "#000000"
    painter2.fillRect (0, 0, 400, 400)
}

drawBackground(painter1);
drawBackground(painter2);

painter1.fillStyle = "#FF00FF";//magenta
//backslash of squares
var k = 0;
while (k < 13) {
    painter1.fillRect (370-30*k, 10+30*k, 20, 20);
    ++k;
}

painter2.fillStyle = "#00FFFF";//teal
for (var j = 0; j < 13; ++j){
    //rows and columns of squares
    for (var i = 0; i < 13; ++i) {
    painter2.fillRect (10+30*i, 10+j*30, 20, 20);
    }
}